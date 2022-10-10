const express = require('express');
const {
	registerUser,
	loginUser,
	logoutUser,
	forgotPassword,
	resetPassword,
	getUserDetails,
	updateUserPassword,
	updateUserProfile,
	getAllUsers,
	getSingleUser,
	deleteUserProfile,
	updateUserRole,
} = require('../controllers/userController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/me').get(isAuthenticatedUser, getUserDetails);
router.route('/me/update').put(isAuthenticatedUser, updateUserProfile);
router.route('/password/update').put(isAuthenticatedUser, updateUserPassword);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/logout').get(logoutUser);

router
	.route('/admin/users')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers);
router
	.route('/admin/user/:id')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
	.put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
	.delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUserProfile);
module.exports = router;
