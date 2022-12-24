const { config } = require('dotenv');
const express = require('express');
const router = express.Router();
const checkout = require('../controllers/paymentController');

config({ path: '../config/config.env' });

router.route('/checkout').post(checkout);

module.exports = router; 