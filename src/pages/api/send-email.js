import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();

export async function POST({ request }) {
  const formData = await request.formData();
  const { name, phone, message } = Object.fromEntries(formData);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true, // true para 465, false para otros puertos
    tls: {
      rejectUnauthorized: false
    }
  });
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Nuevo mensaje desde tu sitio web',
    text: `Nombre: ${name}\nNumero: ${phone}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error.message); // Mensaje de error
  console.error('Error stack:', error.stack); // Stack trace
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
