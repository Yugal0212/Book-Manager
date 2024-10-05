const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (connection) {
    console.log('MongoDB connected');
  } else {
    console.error('MongoDB connection failed');
    process.exit(1);
  }
};

module.exports = connectDB;
