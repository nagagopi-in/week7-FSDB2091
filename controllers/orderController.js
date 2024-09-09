const Order = require('../models/Order');
const User = require('../models/User');

// Place Order
exports.placeOrder = async (req, res) => {
  const { userId, products, totalPrice } = req.body;

  try {
    // Validate user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new order
    const newOrder = new Order({
      user: userId,
      products,
      totalPrice,
      status: 'Pending',
    });

    await newOrder.save();

    // Update user order history
    user.orders.push(newOrder._id);
    await user.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
