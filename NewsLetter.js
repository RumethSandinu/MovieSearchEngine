// Validate the first name
function validateFirstName() {
    var firstName = document.getElementById('FirstName').value;
    var validationIconCorrect = document.querySelector('.ValidationIcon--correct');
    var validationIconIncorrect = document.querySelector('.ValidationIcon--incorrect');
    var regex = /^[a-zA-Z]+$/;

    if (firstName && regex.test(firstName)) {
        //Display the correctInput.png if the first name is valid
        validationIconCorrect.style.display = 'block';
        //Hide worngInput.png
        validationIconIncorrect.style.display = 'none';
        return true;
    } else {
        //Display the wrongInput.png if the first name is invalid
        validationIconCorrect.style.display = 'none';
        //Hide correctInput.png
        validationIconIncorrect.style.display = 'block';
        return false;
    }
}

// Validate the last name
function validateLastName() {
    var lastName = document.getElementById('LastName').value;
    var validationIconCorrect = document.querySelector('.ValidationIcon--correct-lastname');
    var validationIconIncorrect = document.querySelector('.ValidationIcon--incorrect-lastname');
    var regex = /^[a-zA-Z]+$/;

    if (lastName && regex.test(lastName)) {
        //Display the correctInput.png if the last name is valid
        validationIconCorrect.style.display = 'block';
        //Hide worngInput.png
        validationIconIncorrect.style.display = 'none';
        return true;
    } else {
        //Display the wrongInput.png if the last name is invalid
        validationIconCorrect.style.display = 'none';
        //Hide correctInput.png
        validationIconIncorrect.style.display = 'block';
        return false;
    }
}

// Validate the email
function validateEmail() {
    var email = document.getElementById('Email').value;
    var validationIconCorrect = document.querySelector('.ValidationIcon--correct-email');
    var validationIconIncorrect = document.querySelector('.ValidationIcon--incorrect-email');
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && regex.test(email)) {
        //Display the correctInput.png if the email is valid
        validationIconCorrect.style.display = 'block';
        //Hide worngInput.png
        validationIconIncorrect.style.display = 'none';
        return true;
    } else {
        //Display the wrongInput.png if the email is invalid
        validationIconCorrect.style.display = 'none';
        //Hide correctInput.png
        validationIconIncorrect.style.display = 'block';
        return false;
    }
}

//After clicking subscribe button
function subscribeClicked() {
    var isValidFirstName = validateFirstName();
    var isValidLastName = validateLastName();
    var isValidEmail = validateEmail();
    //If all the three inputs valid then give a alert message
    if (isValidFirstName && isValidLastName && isValidEmail) {
        alert("Dear " + document.getElementById('FirstName').value + " " + document.getElementById('LastName').value + ",You have successfully subscribed to the personalized Newsletter."); // Display the success alert
        window.close();
    //If at least one input invalid then give a alert message
    } else {
        alert("Validation failed");
    }
}
