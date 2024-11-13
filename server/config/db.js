require('dotenv').config();  // Ensure this is at the top of the file

const mongoose = require('mongoose');
const { secret } = require('./secret');

mongoose.set('strictQuery', false);

// Set up MongoDB URI
const MONGO_URI = secret.db_url;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection successful!');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
  }
};

module.exports = connectDB;
