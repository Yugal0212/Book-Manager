const mongoose = require('mongoose');

const connectDB = async () => {
  const connection = await mongoose.connect('mongodb+srv://ypatel:yugal0212@bookmanager.ywfvi.mongodb.net/app', {
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
