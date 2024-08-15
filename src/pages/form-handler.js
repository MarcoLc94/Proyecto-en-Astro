// src/pages/form-handler.js
document.querySelector('.contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data.message); // Maneja la respuesta según sea necesario
  });
  