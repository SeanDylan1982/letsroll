const express = require('express');
const router = express.Router();
const User = require('./models/user');
const { redirect } = require('react-router-dom');

app = express();

router.post('/signup', async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, email, password } = req.body;

    // Create a new user record
    const user = new User({ name, email, password });

    // Save the user to the database
    await user.save();

    // Return a success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: error.message });
  }
  redirect('/');
});

router.post('/login', async (req, res) => {
  try {
    // Extract user credentials from the request body
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists and the password is correct
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Return a success response
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: error.message });
  }
  redirect('/');
});
