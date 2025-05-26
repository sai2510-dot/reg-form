document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!name || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Registration successful!');
        form.reset(); // Clear the form
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
