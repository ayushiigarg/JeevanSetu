const express = require("express");
const router = express.Router();
const {
  createDonor,
  getDonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorStats,
} = require("../controllers/donor");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");

//add donor

router.post("/", verifyTokenAndAuthorization, createDonor);

//get all donors

router.get("/", getDonors);

//update donor

router.put("/:id", updateDonor);

//get one donor

router.get("/find/:id", getOneDonor);

//delete donor

router.delete("/:id", deleteDonor);

//get donor stats

router.get("/stats", getDonorStats);

module.exports = router;
