const express = require("express");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
require("dotenv").config();
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

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
    await resend.emails.send({
      from: process.env.EMAIL_USER, // debe estar verificado en Resend
      to: process.env.EMAIL_USER,   // tu correo destino
      reply_to: email,              // para responder al remitente
      subject: `Mensaje de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${content}`,
    });

    res.status(200).send("Correo enviado con éxito!");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).send("Error al enviar el correo");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
