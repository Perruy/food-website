
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and attach the submit event listener
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        // Prevent form submission
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;
        let errorMessage = '';

        // Validate Name
        if (name === '') {
            isValid = false;
            errorMessage += 'Name is required.\n';
        }

        // Validate Email
        if (email === '') {
            isValid = false;
            errorMessage += 'Email is required.\n';
        } else if (!validateEmail(email)) {
            isValid = false;
            errorMessage += 'Invalid email format.\n';
        }


        if (subject === '') {
            isValid = false;
            errorMessage += 'Subject is required.\n';
        }

        
        if (message === '') {
            isValid = false;
            errorMessage += 'Message is required.\n';
        }

        if (isValid) {
           
            alert('Form submitted successfully!');
            form.submit(); 
        } else {
            alert(errorMessage);
        }
    });

    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
