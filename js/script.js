document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector('form');

 
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return false;
        }

        alert('Thank you for your message! We will get back to you soon.');

        form.reset();

        return true; 
    });
});
