document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        // Imię i nazwisko
        const name = form.name;
        const nameRegex = /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż\s\-]{3,}$/;
        if (!nameRegex.test(name.value.trim())) {
            name.classList.add('is-invalid');
            valid = false;
        } else {
            name.classList.remove('is-invalid');
        }

        // Email
        const email = form.email;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // Wiadomość
        const message = form.message;
        if (message.value.trim().length < 10) {
            message.classList.add('is-invalid');
            valid = false;
        } else {
            message.classList.remove('is-invalid');
        }

        if (valid) {
            alert("Dziękujemy za wiadomość! Skontaktujemy się wkrótce.");
            form.reset();
        }
    });

    // Usuwanie błędów na zmianę pola
    form.querySelectorAll('.form-control').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('is-invalid');
        });
    });
});
