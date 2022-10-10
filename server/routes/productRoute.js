const express = require('express');
const {
	getAllProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProductDetails,
	createProductReview,
	getProductReviews,
	deleteProductReview,
} = require('../controllers/productController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

// Get all prod
// Get single prod details
// router.route('/products').get(isAuthenticatedUser, getAllProducts);

// // create prod --> admin
// router
// 	.route('/product/new')
// 	.post(isAuthenticatedUser, authorizeRoles(), createProduct);

// // update prod --> admin
// // Delete prod --> admin
// router
// 	.route('/product/:id')
// 	.put(isAuthenticatedUser, updateProduct)
// 	.delete(isAuthenticatedUser, deleteProduct)
// 	.get(getProductDetails);

// module.exports = router;

router.route('/products').get(getAllProducts);

router
	.route('/admin/products')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getAllProducts);

router
	.route('/admin/product/new')
	.post(isAuthenticatedUser, authorizeRoles('admin'), createProduct);

router
	.route('/admin/product/:id')
	.put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
	.delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

router.route('/product/:id').get(getProductDetails);

router.route('/review').put(isAuthenticatedUser, createProductReview);

router
	.route('/reviews')
	.get(getProductReviews)
	.delete(isAuthenticatedUser, deleteProductReview);
module.exports = router;
