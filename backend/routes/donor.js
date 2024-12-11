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

//add donor

router.post("/", createDonor);

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
