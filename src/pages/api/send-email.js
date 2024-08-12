// src/pages/api/send-email.js
import emailjs from 'emailjs-com';

export async function post({ request }) {
  const formData = await request.formData();
  const { name, email, message } = Object.fromEntries(formData);

  try {
    const result = await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID');
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
