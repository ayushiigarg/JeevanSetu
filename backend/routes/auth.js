const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const router = express.Router();

//register route
router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;