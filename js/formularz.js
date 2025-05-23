document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservationForm');
    const peopleRadios = form.querySelectorAll('input[name="people"]');
    const peopleGroup = document.getElementById('peopleGroup');
    const peopleFeedback = document.getElementById('peopleFeedback');

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


        const email = form.email;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
        }


        const phone = form.phone;
        const phoneVal = phone.value.trim();
        const phoneRegex = /^[0-9]{9}$/; // dokładnie 9 cyfr, nic więcej
        if (!phoneRegex.test(phoneVal)) {
            phone.classList.add('is-invalid');
            valid = false;
        } else {
            phone.classList.remove('is-invalid');
        }



        // Data
        const date = form.date;
        if (!date.value) {
            date.classList.add('is-invalid');
            valid = false;
        } else {
            date.classList.remove('is-invalid');
        }

        // Radio: liczba osób
        let checkedRadio = false;
        peopleRadios.forEach(radio => {
            if (radio.checked) checkedRadio = true;
        });
        if (!checkedRadio) {
            peopleGroup.classList.add('is-invalid');
            peopleFeedback.style.display = 'block';
            valid = false;
        } else {
            peopleGroup.classList.remove('is-invalid');
            peopleFeedback.style.display = 'none';
        }

        // Godzina
        const time = form.time;
        if (!time.value) {
            time.classList.add('is-invalid');
            valid = false;
        } else {
            time.classList.remove('is-invalid');
        }

        // UWAGA: inne pola nie są wymagane

        // Jeśli wszystko ok, potwierdzenie i wysyłka (tu demo - alert)
        if (valid) {
            if (confirm("Czy na pewno chcesz wysłać rezerwację?")) {
                // Możesz tu wysłać formularz AJAXem, lub po prostu:
                form.reset();
                alert("Dziękujemy za rezerwację! Skontaktujemy się z Tobą wkrótce.");
            }
        }
    });

    // Usuwaj błędy na zmianę pola
    form.querySelectorAll('.form-control, .form-select').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('is-invalid');
        });
    });
    peopleRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            peopleGroup.classList.remove('is-invalid');
            peopleFeedback.style.display = 'none';
        });
    });
});
