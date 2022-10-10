const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// Error middleware
const errorMiddleware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());
app.use(errorMiddleware);

// Routes
const product = require('./routes/productRoute');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

module.exports = app;
