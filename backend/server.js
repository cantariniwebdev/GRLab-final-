const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: ["https://grlab.netlify.app"],
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

const validateContactForm = [
  body("name").notEmpty().trim().escape().isLength({ max: 100 }),

  body("email").notEmpty().isEmail().normalizeEmail(),

  body("phone").notEmpty().isMobilePhone().trim().escape(),

  body("content").notEmpty().trim().escape().isLength({ max: 5000 }),
];

app.post("/contact", validateContactForm, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

  const { name, email, phone, content } = req.body;

  try {
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

    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo enviado!");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
