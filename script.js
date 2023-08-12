document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const errorMessage = document.getElementById("error-message");

    contactForm.addEventListener("submit", function(event) {
        errorMessage.classList.add("hidden");
        const inputFields = contactForm.querySelectorAll("input, textarea");
        inputFields.forEach(field => field.classList.remove("error"));

       
        const nameField = contactForm.querySelector("#name");
        if (!nameField.value.trim()) {
            event.preventDefault();
            errorMessage.classList.remove("hidden");
            nameField.classList.add("error");
            nameField.focus();
            return;
        }

       
        const phoneField = contactForm.querySelector("#phone");
        if (!/^\d{10}$/.test(phoneField.value)) {
            event.preventDefault();
            errorMessage.classList.remove("hidden");
            phoneField.classList.add("error");
            phoneField.focus();
            return;
        }

       
        const emailField = contactForm.querySelector("#email");
        if (!/\S+@\S+\.\S+/.test(emailField.value)) {
            event.preventDefault();
            errorMessage.classList.remove("hidden");
            emailField.classList.add("error");
            emailField.focus();
            return;
        }
    });

    
    contactForm.addEventListener("focus", function(event) {
        if (event.target.matches("input, textarea")) {
            event.target.classList.remove("error");
        }
    }, true);
});
