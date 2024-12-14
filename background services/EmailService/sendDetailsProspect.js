const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const prospect = require("../models/Prospect");
const { sendMail } = require("../helpers/sendMail");

const sendDetailsProspectEmail = async () => {
  const prospects = await prospect.find({ status: 0 }); //registered prospect but not sent email
  if (prospects.length > 0) {
    for (let prospect of prospects) {
      ejs.renderFile(
        "templates/BloodDonationProspect.ejs",
        { name: prospect.name },
        async (err, data) => {
          let messageOptions = {
            from: process.env.EMAIL,
            to: prospect.email,
            subject: "Jeevanetu Thanks You",
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
};

module.exports = { sendDetailsProspectEmail };
