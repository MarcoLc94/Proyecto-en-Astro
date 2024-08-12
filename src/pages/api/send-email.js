// src/pages/api/send-email.js
import emailjs from 'emailjs-com';

export async function post({ request }) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    await emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    );
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
