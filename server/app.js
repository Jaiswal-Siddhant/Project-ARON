const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const Razorpay = require('razorpay');
const dotenv = require('dotenv');

// Error middleware
const errorMiddleware = require('./middlewares/error');

dotenv.config({ path: 'server/config/config.env' });

app.use(express.json());
app.use(cookieParser());
app.use(errorMiddleware);

// Routes
const product = require('./routes/productRoute');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoute');
const paymentRoute = require('./routes/paymentRoute');


app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', paymentRoute);

exports.instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_API_KEY,
    key_secret: process.env.RAZOR_PAY_API_SECRET,
});

module.exports = app;
