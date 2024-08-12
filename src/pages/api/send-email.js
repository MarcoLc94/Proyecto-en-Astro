// src/pages/api/send-email.js

import emailjs from "emailjs-com";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await emailjs.sendForm(
        import.meta.env.YOUR_SERVICE_ID, // Usar la variable de entorno
        import.meta.env.YOUR_TEMPLATE_ID,
        req.body,
        import.meta.env.YOUR_USER_ID
      );
      res.status(200).json({ message: "Email enviado con éxito" });
    } catch (error) {
      console.error("Error al enviar el email:", error);
      res.status(500).json({ message: "Error al enviar el email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
