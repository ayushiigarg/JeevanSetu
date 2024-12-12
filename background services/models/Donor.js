const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  tel: { type: Number, required: true },
  bloodGroup: { type: String, required: true },
  weight: { type: Number },
  date: { type: Date, required: true },
  disease: { type: String },
  age: { type: Number, required: true },
  bloodPressure: { type: Number },
  status: { type: Number, default: 0 },
});

module.exports = mongoose.model("Donor", donorSchema);
