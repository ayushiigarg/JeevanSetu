const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
//CORS
app.use(cors());
//JSON
app.use(express.json());
//Routes
app.use("/api/v1/auth", authRoutes);

module.exports = app;
