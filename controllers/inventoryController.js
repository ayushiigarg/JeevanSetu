const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

const createInventoryController = async (req, res) => {
  try {
    const {email, inventoryType} = req.body;
    const user = await userModel.findOne({email});
    if (!user) {
     throw new Error("User Not Found");
    }
    if(inventoryType === "in" && user.role !== "donor"){
      throw new Error("Not a donor account");
    }
    if(inventoryType === "out" && user.role !== "hospital"){
      throw new Error("Not a hospital");
    }

    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New blood record added",
      inventory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Inventory API",
      error,
    });
  }
} 

const  getInventoryController = async(req,res) => {
  try {
     const inventory = await inventoryModel.find({ organisation : req.body.userId }); 
     return res.status(200).send({
       success: true,
       message: "Inventory fetched successfully",
       inventory,
     }).populate("donor").populate("hospital").sort({createdAt: -1});
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get Inventory API",
      error,
    });
  }
}

module.exports = { createInventoryController , getInventoryController};