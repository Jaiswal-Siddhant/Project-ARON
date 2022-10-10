const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const ApiFeatures = require('../utils/apiFeatures');

// Create Product
// Admin route
exports.createProduct = catchAsyncError(async (req, res, next) => {
	req.body.user = req.user.id;
	const product = await Product.create(req.body);
	res.status(200).json({ success: true, product });
});

// GET all products
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
	// return next(new ErrorHandler('Product Not Found!', 500).getError(res));
	const resultPerPage = 8;
	const productsCount = await Product.countDocuments();

	const apiFeature = new ApiFeatures(Product.find(), req.query)
		.search()
		.filter()
		.pagination(resultPerPage);
	const products = await apiFeature.query;
	res.status(200).json({ success: true, products, productsCount });
});

// GET single prod details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
	let product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product Not Found!', 404).getError(res));
	}

	res.status(200).json({
		success: true,
		product,
	});
});

// Update product
exports.updateProduct = catchAsyncError(async (req, res, next) => {
	let product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product Not Found!', 404).getError(res));
	}

	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({ success: true, product });
});

// Delete product
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
	let product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product Not Found!', 404).getError(res));
	}

	await product.remove();

	res.status(200).json({
		success: true,
		message: 'Product deleted successfully',
	});
});

// Create new review or update review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
	const { rating, comment, productId } = req.body;
	const review = {
		user: req.user._id,
		name: req.user.name,
		rating: Number(rating),
		comment,
	};

	const product = await Product.findById(productId);
	const isReviewed = product.reviews.find(
		(rev) => rev.user.toString() === req.user._id.toString()
	);
	if (isReviewed) {
		product.reviews.forEach((rev) => {
			if (rev.user.toString() === req.user._id) {
				rev.rating = rating;
				rev.comment = comment;
			}
		});
	} else {
		product.reviews.push(review);
		product.numOfReviews = product.reviews.length;
	}

	let avg = 0;

	product.reviews.forEach((val) => {
		avg += Number(val.rating);
	});

	product.ratings = avg / product.reviews.length;

	await product.save({ validaeBeforeSave: false });
	res.status(200).json({ success: true });
});

// Get all reviews of product
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
	const product = await Product.findById(req.query.productId);
	if (!product) {
		return next(new ErrorHandler('Product NOT fount', 404).getError(res));
	}

	res.status(200).json({
		success: true,
		reviews: product.reviews,
	});
});

exports.deleteProductReview = catchAsyncError(async (req, res, next) => {
	const product = await Product.findById(req.query.productId);
	if (!product) {
		return next(new ErrorHandler('Product NOT fount', 404).getError(res));
	}

	const review = product.reviews.filter(
		(rev) => rev._id.toString() !== req.query.id.toString()
	);
	console.log(review);
	let avg = 0;

	review.forEach((val) => {
		avg += Number(val.rating);
	});

	const ratings = avg / review.length;
	const numOfReviews = review.length;

	await Product.findByIdAndUpdate(
		req.query.productId,
		{
			reviews: review,
			ratings,
			numOfReviews,
		},
		{
			new: true,
			runValidators: true,
			useFindAndModify: false,
		}
	);

	res.status(200).json({
		success: true,
		reviews: product.reviews,
	});
});
