const instance2 = require('../app');

module.exports = checkout = async (req, res) => {
    const options = {
        amount: 5000,
        currency: 'INR',
    };
    const order = await instance2.instance.orders.create(options);
    console.log(order);
    res.status(200).end();
};