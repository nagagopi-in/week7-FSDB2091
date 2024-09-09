const express = require('express');
const router = express.Router();

// Import user controller or functions
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');

// POST route to register a new user
router.post('/register', registerUser);

// POST route to log in a user
router.post('/login', loginUser);

// GET route to retrieve user profile
router.get('/profile', getUserProfile);

module.exports = router;
