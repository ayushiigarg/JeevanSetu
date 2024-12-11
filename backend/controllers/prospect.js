const Prospect = require("../models/prospect");

// create

const createProspect = async (req, res) => {
  try {
    const newProspect = Prospect(req.body); // Create a new donor object
    const prospect = await newProspect.save(); // Save the donor object
    res.status(201).json({ prospect }); // Send the donor object as a response
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

//get all donors

const getProspects = async (req, res) => {
  try {
    const prospects = await Prospect.find().sort({ createdAt: -1 }); // Get all donors sorted by latest donor to created on top
    res.status(200).json({ prospects }); // Send the donors as a response
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

//udpate donor

const updateProspect = async (req, res) => {
  try {
    const updatedProspect = await Prospect.findByIdAndUpdate(
      req.params.id, // 1. ID of the donor to update
      { $set: req.body }, // 2. The update operation (set new values from req.body)
      { new: true } // 3. Option to return the updated document (not the original one)
    );
    res.status(201).json({ updatedProspect }); // Send the updated donor as a response
  } catch (error) {
    res.status(500).json({ error });
  }
};

//get one donor

const getOneProspect = async (req, res) => {
  try {
    const prospect = await Prospect.findById(req.params.id); // Find a donor by ID
    res.status(200).json({ prospect }); // Send the donor as a response
  } catch (error) {
    res.status(500).json({ error });
  }
};

//delete donor

const deleteProspect = async (req, res) => {
  try {
    const prospect = await Prospect.findByIdAndDelete(req.params.id); // Find a donor by ID and delete it
    res.status(200).json("Prospect deleted successfully"); // Send the deleted donor as a response
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createProspect,
  getProspects,
  updateProspect,
  getOneProspect,
  deleteProspect,
};
