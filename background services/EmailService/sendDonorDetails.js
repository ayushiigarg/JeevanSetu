const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const donor = require("../models/Donor");
const { sendMail } = require("../helpers/sendMail");

const sendDonorDetails = async () => {
  const donors = await donor.find({ status: 0 });
  if (donors.length > 0) {
    for (let donor of donors) {
      ejs.renderFile(
        "templates/BloodDonationDonor.ejs",
        {
          name: donor.name,
          email: donor.email,
          tel: donor.tel,
          address: donor.address,
          bloodGroup: donor.bloodGroup,
          disease: donor.disease,
          weight: donor.weight,
          bloodPressure: donor.bloodPressure,
          age: donor.age,
          date: donor.date,
        },
        async (err, data) => {
          let messageOptions = {
            from: process.env.EMAIL,
            to: donor.email,
            subject: "Hello JeevanSetu Donor",
            html: data,
          };
          try {
            sendMail(messageOptions);
            await donor.findByIdAndUpdate(donor._id, {
              $set: { status: 1 },
            });
          } catch (error) {
            console.log("Error in sending email", err);
          }
        }
      );
    }
  }
};
module.exports = { sendDonorDetails };
