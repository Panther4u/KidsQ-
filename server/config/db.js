require('dotenv').config();  // Ensure this is at the top of the file

const mongoose = require('mongoose');
const { secret } = require('./secret');

mongoose.set('strictQuery', false);

// Use the environment variable for MongoDB URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/default_db';  // Fallback to local URL if env variable is not set

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connection success!');
  } catch (err) {
    console.log('MongoDB connection failed!', err.message);
  }
};

module.exports = connectDB;
