const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db.js');
    
dotenv.config();

//mongodb connection
connectDB();

const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth/", require("./routes/authRoutes"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Server running in ${process.env.DEV_MODE} on ${process.env.PORT}`.bgBlue.white ));