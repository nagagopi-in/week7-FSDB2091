const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      stock
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
