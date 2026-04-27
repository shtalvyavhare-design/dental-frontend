import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ PORT
const PORT = process.env.PORT || 5000;

// ✅ CONNECT MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

// ✅ SCHEMA
const leadSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: String,
  whatsapp: String,
  country: { type: String, required: true },
  treatment: { type: String, required: true },
  message: String,
  consent: { type: Boolean, required: true },
  status: { type: String, default: "new" },
  createdAt: { type: Date, default: Date.now },
});

const Lead = mongoose.model("Lead", leadSchema);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server running ✅");
});

// ✅ POST ROUTE
app.post("/consultation", async (req, res) => {
  try {
    console.log("🔥 API HIT");

    const { fullName, email, country, whatsapp, treatment, message, consent } =
      req.body;

    console.log("📥 Incoming Data:", req.body);

    // ✅ VALIDATION
    if (!consent) {
      return res.status(400).json({ message: "Consent required" });
    }

    if (!email && !whatsapp) {
      return res.status(400).json({ message: "Email or WhatsApp required" });
    }

    if (!fullName || !country || !treatment) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ SAVE TO DB
    const newLead = await Lead.create({
      fullName,
      email,
      whatsapp,
      country,
      treatment,
      message,
      consent,
    });

    console.log("💾 Saved in DB:", newLead._id);

    // ✅ EMAIL CONFIG
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("📧 Sending email...");

   // ✅ SEND EMAIL TO YOU (ADMIN)
const info = await transporter.sendMail({
  from: `"Dental Leads" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: "🔥 New Consultation Lead",
  html: `
    <h2>New Patient Inquiry</h2>
    <p><b>Name:</b> ${fullName}</p>
    <p><b>Email:</b> ${email || "N/A"}</p>
    <p><b>Country:</b> ${country}</p>
    <p><b>WhatsApp:</b> ${whatsapp || "N/A"}</p>
    <p><b>Treatment:</b> ${treatment}</p>
    <p><b>Message:</b> ${message || "N/A"}</p>
    <p><b>Consent:</b> ${consent}</p>
    <p><b>Time:</b> ${new Date().toLocaleString()}</p>
  `,
});

console.log("Admin email sent:", info.response);

// ✅ AUTO EMAIL TO PATIENT (SAFE VERSION)
try {
  console.log("Patient email:", email);

  if (email && email.trim() !== "") {
    const autoMail = await transporter.sendMail({
      from: `"Permanent Smile Care" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your consultation request",
      html: `
        <h2>Thank You for Reaching Out</h2>

        <p>Hi ${fullName},</p>

        <p>We have received your consultation request successfully.</p>

        <p>Our implant specialists will review your case and contact you shortly with a personalized treatment plan.</p>

        <br/>

        <p><b>What happens next?</b></p>
        <ul>
          <li>✔ Case review by implant doctor</li>
          <li>✔ Eligibility confirmation</li>
          <li>✔ Treatment plan & cost estimate</li>
        </ul>

        <br/>

        <p>If urgent, feel free to reply to this email or contact us on WhatsApp.</p>

        <br/>

        <p><b>Permanent Smile Care Team</b></p>
      `,
    });

    console.log("Auto email sent:", autoMail.response);
  } else {
    console.log("No patient email provided → skipping auto email");
  }
} catch (err) {
  console.error("AUTO EMAIL ERROR ❌:", err);
}
    console.log("✅ Email sent:", info.response);

    res.status(200).json({
      success: true,
      message: "Lead saved + email sent ✅",
    });
  } catch (error) {
    console.error("❌ SERVER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error ❌",
    });
  }
});

// ✅ GET LEADS (TEST DB)
app.get("/leads", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching leads");
  }
});

// ✅ START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://dental-backend-spgw.onrender.com/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        country: formData.country,
        treatment: formData.treatment,
        message: formData.message,
        consent: formData.consent,
      }),
    });

    const data = await response.json();

    console.log("Response:", data);

    if (response.ok) {
      alert("Submitted successfully ✅");
    } else {
      alert(data.message || "Error ❌");
    }
  } catch (error) {
    console.error("Frontend error:", error);
    alert("Server not reachable ❌");
  }
};
