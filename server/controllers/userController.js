const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

// Register User
exports.registerUser = catchAsyncError(async (req, res, next) => {
	const { name, email, password } = req.body;
	const user = await User.create({
		name,
		email,
		password,
		avatar: {
			public_id: 'sample ID',
			url: 'sampleURI',
		},
	});

	sendToken(user, 201, res);
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password)
		return next(
			new ErrorHandler('Please enter email and password', 400).getError(
				res
			)
		);

	const user = await User.findOne({ email }).select('+password');
	if (!user)
		return next(
			new ErrorHandler('Invalid email or password', 401).getError(res)
		);

	const isPasswordMatched = await user.comparePassword(password);
	if (!isPasswordMatched)
		return next(
			new ErrorHandler('Invalid email or password', 401).getError(res)
		);

	sendToken(user, 200, res);
});

exports.logoutUser = catchAsyncError(async (req, res, next) => {
	res.cookie('token', null, {
		expires: new Date(Date.now()),
		httpOnly: true,
	});
	res.status(200).json({ success: true, message: 'Logged out' });
});

// Forgot password
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return next(new ErrorHandler('User not found', 404).getError(res));
	}

	// Get reset password token
	const resetToken = user.getResetPasswordToken();
	await user.save({ validateBeforeSave: false });
	const resetPasswordURL = `${req.protocol}://${req.get(
		'host'
	)}/api/v1/password/reset/${resetToken}`;

	const message = `Your Password reset link is: \n\n${resetPasswordURL}\n\nIf you have not requested this email then please ignore it.`;
	try {
		await sendEmail({
			email: user.email,
			subject: 'Reset Password',
			message,
		});
		res.status(200).json({
			success: true,
			message: `Email sent to ${user.email} successfully`,
		});
	} catch (error) {
		user.getResetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;
		await user.save({ validateBeforeSave: false });
		return next(new ErrorHandler(error.message, 500).getError(res));
	}
	return;
});

exports.resetPassword = catchAsyncError(async (req, res, next) => {
	// Creating token hash
	const resetPasswordToken = crypto
		.createHash('sha256')
		.update(req.params.token)
		.digest('hex');

	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() },
	});

	if (!user) {
		return next(
			new ErrorHandler(
				'Reset password token is invalid or has been expired',
				400
			).getError(res)
		);
	}

	if (req.body.password !== req.body.confirmPassword) {
		return next(
			new ErrorHandler('Password do not match', 400).getError(res)
		);
	}

	user.password = req.body.password;
	user.resetPasswordToken = undefined;
	user.resetPasswordExpire = undefined;

	await user.save();
	sendToken(user, 200, res);
});

// Get user details for LOGGED IN user only
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	res.status(200).json({
		success: true,
		user,
	});
});

// Update user password
exports.updateUserPassword = catchAsyncError(async (req, res, next) => {
	const user = await User.findById(req.user.id).select('+password');

	const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

	if (!isPasswordMatched) {
		return next(new ErrorHandler('Invalid password', 400).getError(res));
	}

	if (req.body.newPassword !== req.body.confirmPassword) {
		return next(
			new ErrorHandler('Passwords Do not match', 400).getError(res)
		);
	}

	user.password = req.body.newPassword;

	await user.save();
	sendToken(user, 200, res);
});

// Update user profile
exports.updateUserProfile = catchAsyncError(async (req, res, next) => {
	// TODO: add cloudinary
	const newUserData = {
		name: req.body.name,
		email: req.body.email,
	};

	if (!newUserData.name || !newUserData.email) {
		return res.status(400).json({
			success: false,
		});
	}
	const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	if (!user) {
		return res.status(400).json({
			success: false,
		});
	}

	res.status(200).json({
		success: true,
	});
});

// @ADMIN ROUTE - to see all users
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
	const users = await User.find({});
	res.status(200).json({ success: true, users });
});

// @ADMIN ROUTE - to see particular user detail
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
	const users = await User.findById(req.params.id);
	if (!users) {
		return next(
			new ErrorHandler(
				`User does not exist with id ${req.params.id}`,
				400
			).getError(res)
		);
	}
	res.status(200).json({ success: true, users });
});

// @ADMIN ROUTE Update user role
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
	// TODO: add cloudinary
	const newUserData = {
		name: req.body.name,
		email: req.body.email,
		role: req.body.role,
	};

	if (!newUserData.name || !newUserData.email) {
		return res.status(400).json({
			success: false,
		});
	}
	const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	if (!user) {
		return res.status(400).json({
			success: false,
		});
	}

	res.status(200).json({
		success: true,
	});
});

// @ADMIN Delete user
exports.deleteUserProfile = catchAsyncError(async (req, res, next) => {
	// TODO: remove cloudinary
	const user = await User.findById(req.params.id);

	if (!user) {
		return next(
			new ErrorHandler(
				`User does not exist with id ${req.params.id}`,
				400
			).getError(res)
		);
	}

	await user.remove();

	res.status(200).json({
		success: true,
		message: 'User deleted successfully.',
	});
});
