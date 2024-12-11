const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const donorRoute = require("./routes/donor");
const prospectRoute = require("./routes/prospect");

//CORS
app.use(cors());
//JSON
app.use(express.json());
//Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/donors", donorRoute);
app.use("/api/v1/prospects", prospectRoute);

module.exports = app;
