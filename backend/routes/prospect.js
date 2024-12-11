const express = require("express");
const router = express.Router();
const {
  createProspect,
  getProspects,
  updateProspect,
  getOneProspect,
  deleteProspect,
} = require("../controllers/prospect");

//add prospect

router.post("/", createProspect);

//get all prospects
router.get("/", getProspects);

//update prospect

router.put("/:id", updateProspect);

//get one prospect

router.get("/find/:id", getOneProspect);

//delete prospect

router.delete("/:id", deleteProspect);

module.exports = router;
