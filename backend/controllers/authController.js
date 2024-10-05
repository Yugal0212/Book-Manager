const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup Function
exports.signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    originalPassword: password,  // Storing plain text password (insecure, but you did this for some reason)
  });

  const savedUser = await user.save();
  
  if (savedUser) {
    return res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } else {
    return res.status(500).json({ message: 'Failed to register user' });
  }
};

// Login Function
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Properly compare hashed password with entered password using bcrypt
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // If password matches, create a token
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
  return res.json({ success: true, token });
};
