// Packages
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

// Utils
import ConnectDB from "./config/db.js";

dotenv.config();
const Port = process.env.PORT || 8000;

ConnectDB();

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true, // Allow credentials (cookies)
}));


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(userRoutes);

app.listen(Port, () => console.log(`Server is listening on Port: ${Port}`));

// Send Contact Data To Email
app.post("/contact", async (req, res) => {
  const { username, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "ms4websites@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send(error);
  }
});
