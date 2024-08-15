// src/form-handler.js

document.querySelector('.contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      
      if (response.ok) {
        alert(result.message); // Mensaje de éxito
      } else {
        alert(result.message); // Mensaje de error
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Error al enviar el correo.');
    }
  });
  