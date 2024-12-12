const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
const cron = require("node-cron");
dotenv.config();

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Background Services is running on port ${PORT}`);
  dbConnection();
});

//schedule task

const run = () => {
  cron.schedule("* * * * * *", () => {});
};

run();
