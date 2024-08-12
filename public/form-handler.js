// public/form-handler.js

document.querySelector('.contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const result = await response.json();
    if (response.ok) {
      alert('Email sent successfully!');
      e.target.reset();
    } else {
      alert('Failed to send email: ' + result.error);
    }
  });
  