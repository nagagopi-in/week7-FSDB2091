const express = require('express');
const router = express.Router();

// Import product controller or functions
const { createProduct, getProducts } = require('../controllers/productController');

// POST route to create a new product
router.post('/', createProduct);

// GET route to retrieve products
router.get('/', getProducts);

module.exports = router;
