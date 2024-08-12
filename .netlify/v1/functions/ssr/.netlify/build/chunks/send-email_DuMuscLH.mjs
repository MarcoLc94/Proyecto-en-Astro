import emailjs from 'emailjs-com';

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await emailjs.sendForm(
        "service_muwm2lo",
        // Usar la variable de entorno
        "template_4buoe8n",
        req.body,
        "Genp-_Rzip-Rps60D"
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

export { handler as default };
