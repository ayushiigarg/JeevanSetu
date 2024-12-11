const Donor = require("../models/Donor");

// create donor

const createDonor = async (req, res) => {
  try {
    const newDonor = Donor(req.body); // Create a new donor object
    const donor = await newDonor.save(); // Save the donor object
    res.status(201).json({ donor }); // Send the donor object as a response
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

//get all donors

const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 }); // Get all donors sorted by latest donor to created on top
    res.status(200).json({ donors }); // Send the donors as a response
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

//udpate donor

const updateDonor = async (req, res) => {
  try {
    const updatedDonor = await Donor.findByIdAndUpdate(
      req.params.id, // 1. ID of the donor to update
      { $set: req.body }, // 2. The update operation (set new values from req.body)
      { new: true } // 3. Option to return the updated document (not the original one)
    );
    res.status(201).json({ updatedDonor }); // Send the updated donor as a response
  } catch (error) {
    res.status(500).json({ error });
  }
};

//get one donor

const getOneDonor = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id); // Find a donor by ID
    res.status(200).json({ donor }); // Send the donor as a response
  } catch (error) {
    res.status(500).json({ error });
  }
};

//delete donor

const deleteDonor = async (req, res) => {
  try {
    const donor = await Donor.findByIdAndDelete(req.params.id); // Find a donor by ID and delete it
    res.status(200).json("Donor deleted successfully"); // Send the deleted donor as a response
  } catch (error) {
    res.status(500).json({ error });
  }
};
//STATS

const getDonorStats = async (req, res) => {
  try {
    const stats = await Donor.aggregate([
      {
        $group: {
          _id: "$bloodGroup",
          count: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json({ stats });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createDonor,
  getDonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorStats,
};
