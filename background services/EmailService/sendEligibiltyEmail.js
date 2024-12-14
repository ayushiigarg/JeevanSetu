const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const prospect = require("../models/Prospect");
const { sendMail } = require("../helpers/sendMail");

const sendEligibilityEmail = async () => {
  const prospects = await prospect.find({ status: 0 });
  if (prospects.length > 0) {
    for (let prospect of prospects) {
      if (prospect.age < 18 || prospect.weight < 50) {
        ejs.renderFile(
          "templates/BloodDonationEligibility.ejs",
          { name: prospect.name, age: prospect.age, weight: prospect.weight },
          async (err, data) => {
            let messageOptions = {
              from: process.env.EMAIL,
              to: prospect.email,
              subject: "Blood Donation Eligibility",
              html: data,
            };
            try {
              sendMail(messageOptions);
              await prospect.findByIdAndUpdate(prospect._id, {
                $set: { status: 1 },
              });
            } catch (error) {
              console.log("Error in sending email", err);
            }
          }
        );
      }
    }
  }
};

module.exports = { sendEligibilityEmail };
