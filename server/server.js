const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  console.log("Received form submission request");

  try {
    const formData = req.body;

    // Your nodemailer logic here to send an email with form data
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      // host: "gmail",
      // port: 465,
      // secure: true,
      port: 587,
      secure: false,
      auth: {
        user: "apikey", // Use "apikey" as the user
        pass: "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", // Replace with your SendGrid API key
      },
      // tls: {
      //   rejectUnauthorized: true,
      // },
    });

    const mailOptions = {
      from: "syedshahzeb340@gmail.com",
      to: "syed.shazeb90@gmail.com",
      subject: "New Form Submission",
      text: `Form Data: ${JSON.stringify(formData)}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      try {
        console.log("sendMail callback invoked");

        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).send(error.toString());
        }

        console.log("Email sent:", info.response);
        res.status(200).send("Form submitted successfully!");
      } catch (error) {
        console.error("Error in sendMail callback:", error);
        res.status(500).send("Internal Server Error");
      }
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
