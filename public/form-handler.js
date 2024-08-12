// public/form-handler.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const formData = new FormData(form);
  
        try {
          const response = await fetch("/api/send-email", {
            method: "POST",
            body: formData,
          });
          const result = await response.json();
          console.log(result);
          alert("Email enviado con éxito!");
        } catch (error) {
          console.error("Error al enviar el email:", error);
          alert("Error al enviar el email.");
        }
      });
    }
  });
  