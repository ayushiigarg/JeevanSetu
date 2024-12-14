const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const donor = require("../models/Donor");
const { sendMail } = require("../helpers/sendMail");

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

const sendBloodDonationReminder = async () => {
  const donors = await donor.find();
  if (donors.length > 0) {
    for (let donor of donors) {
      const donorDate = new Date(donor.date);
      const today = new Date();
      const diffTime = Math.abs(today - donorDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // First reminder if more than 60 days since last donation
      if (diffDays > 90) {
        await sendReminderEmail(donor);
        // Update donor's `date` field to today's date to indicate the last reminder sent
        const formattedDate = formatDate(today);
        await donor.findByIdAndUpdate(donor._id, {
          $set: { date: formattedDate },
        });
      } else if (diffDays > 7) {
        // Subsequent reminders if more than 7 days have passed since the last reminder
        await sendReminderEmail(donor);
        // Update donor's `date` field to today's date (reminder date)
        const formattedDate = formatDate(today);
        await donor.findByIdAndUpdate(donor._id, {
          $set: { date: formattedDate },
        });
      }
    }
  }
};

// Function to send the email reminder
const sendReminderEmail = async (donor) => {
  ejs.renderFile(
    "templates/BloodDonationReminder.ejs",
    {
      name: donor.name,
      date: donor.date, // Use the donor's last donation date in the email
    },
    async (err, data) => {
      let messageOptions = {
        from: process.env.EMAIL,
        to: donor.email,
        subject: "JeevanSetu Blood Donation Reminder",
        html: data,
      };

      try {
        // Send the email reminder
        await sendMail(messageOptions);
      } catch (error) {
        console.log("Error in sending email:", error);
      }
    }
  );
};

module.exports = { sendBloodDonationReminder };
