const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { body, validationResult } = require("express-validator");
require("dotenv").config();
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Configurar multer: archivos en memoria
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // máximo 10MB por archivo
});

app.use(cors({
  origin: ["https://grlaboratorio.com"],
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
}));

// NO usar express.json() en rutas con archivos
// app.use(express.json());

// Validación del formulario
const validateContactForm = [
  body("name").notEmpty().trim().escape().isLength({ max: 100 }),
  body("email").notEmpty().isEmail().normalizeEmail(),
  body("phone").notEmpty().trim().escape(),
  body("content").notEmpty().trim().escape().isLength({ max: 5000 }),
];

app.post(
  "/contact",
  upload.array("files"),      // Aquí recibimos múltiples archivos
  validateContactForm,
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, content } = req.body;

    // Convertir archivos a adjuntos para Resend
    const attachments = (req.files || []).map((file) => ({
      filename: file.originalname,
      content: file.buffer
    }));

    try {
      await resend.emails.send({
        from: "Formulario GRLab <onboarding@resend.dev>",
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Mensaje de ${name}`,
        text:
          `Nombre: ${name}\n` +
          `Correo: ${email}\n` +
          `Teléfono: ${phone}\n` +
          `Mensaje:\n${content}`,
        attachments
      });

      res.status(200).send("Correo enviado con éxito!");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).send("Error al enviar el correo");
    }
  }
);

// Middleware de error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}`)
);
