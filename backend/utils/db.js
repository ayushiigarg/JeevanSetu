const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () => {
    try {
          await mongoose.connect(MONGO_URI)
          console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection failed');
        setTimeout(() => {
            dbConnection();
        }, 5000);
    }
}

module.exports = dbConnection; 