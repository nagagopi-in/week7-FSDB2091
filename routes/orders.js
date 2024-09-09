const express = require('express');
const router = express.Router();

// Import order controller or functions
const { placeOrder } = require('../controllers/orderController');

// POST route to place an order
router.post('/', placeOrder);

module.exports = router;
