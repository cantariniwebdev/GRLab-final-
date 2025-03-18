const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["POST"], 
    allowedHeaders: ["Content-Type"]
  }));
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  const { name, email, phone, content } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Mensaje de ${name}`,
    text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${content}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo enviado!");
  } catch (error) {
    res.status(500).send("Error enviando el correo.");
  }
});

app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
