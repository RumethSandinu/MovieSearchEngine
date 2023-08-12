// Get references to form the html file and save the variables \.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const ratingField = document.getElementById('rating');
const commetField = document.getElementById('comment')

// Add form submission event listener
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// Function to set error state.
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
// Function to set success state
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// Function to validate if an email is valid.
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Function to validate the rating field
const validateRating = () => {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (!selectedRating) {
        setError(ratingField, 'Please select a rating');
    } else {
        setSuccess(ratingField);
    }
};
// Function to validate all input fields on form submission
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    // Validate the rating field separately
    validateRating();
};

// Function to show the popup with user data
const showPopup = () => {
const popup = document.getElementById('popup');
const popupUsername = document.getElementById('popupUsername');
const popupRating = document.getElementById('popupRating');
const popupComment = document.getElementById('popupComment');

const usernameValue = username.value.trim();
const commentValue = commetField.value.trim();
const selectedRating = document.querySelector('input[name="rating"]:checked');

popupUsername.innerText = usernameValue;
popupComment.innerText = commentValue;
popupRating.innerText = selectedRating ? selectedRating.value : 'Not rated';

popup.style.display = 'block';

// Close the popup after a 5 seconds 
setTimeout(() => {
    popup.style.display = 'none';
    
    // Load the page after closing the popup and 5 seconds
    window.location.href = 'Index.html';
  }, 5000);
}

    // Add form submission event listener and showing the popup
    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
        const successInputs = document.querySelectorAll('.input-control.success');
        if (successInputs.length === 3) {
            // All inputs are successfully validated, show the popup
            showPopup();
        }
    });