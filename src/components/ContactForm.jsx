import React, { useState } from 'react';
import './ContactForm.css'; // Importa el archivo CSS aquí

function ContactForm({ id }) {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xvgprdnb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSucceeded(true);
        alert("Enviado!!")
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (succeeded) {
    return <p>¡Gracias por contactarnos!</p>;
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name">Nombre:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Teléfono:</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={formState.phone}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        value={formState.message}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}

export default ContactForm;
