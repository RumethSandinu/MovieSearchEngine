// Creating and assigning values for variables and constants
const usernameInput = document.getElementById('user_name');
const ageInput = document.getElementById('user_age');
const genderInput = document.getElementById('gender');
const emailInput = document.getElementById('user_email');
const passwordInput = document.getElementById('password');
const occassionInput = document.getElementById('occassion');
const languageInput = document.getElementById('language');
const itemsInput = document.getElementById('noOfMovies');
const eyeIcon = document.getElementById("eye-icon");
const password = document.getElementById("password");

var Form1 = document.getElementById("PersonalDetails");
var Form2 = document.getElementById("UserPreference1");
var Form3 = document.getElementById("UserPreference2");
var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Finish = document.getElementById("Finish");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var progress = document.getElementById("progress");



// When user enters invalid input show the relevant message
const incorrectInput = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// When user enters valid input show the relevant message
const correctInput = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Check whether the user entered a valid email
const checkMail = emailValue => {
    const excludeSymbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return excludeSymbols.test(String(emailValue).toLowerCase());
};

// When user enters invalid data
const validateInputs = () => {

    // Assign values for variables and constants
    let isValid = true;

    const usernameValue = usernameInput.value.trim();
    const ageValue = ageInput.value.trim();
    const genderValue = genderInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Validate user name
    if (usernameValue === '') {
        incorrectInput(usernameInput, '*required');
        isValid = false;
    } else {
        correctInput(usernameInput);
    }

    // Validate user age
    if (ageValue === '') {
        incorrectInput(ageInput, '*required');
        isValid = false;
    } else if (ageValue < 5) {
        incorrectInput(ageInput, '*Age must be above 5');
        isValid = false;
    } else if (ageValue > 120) {
        incorrectInput(ageInput, '*Invalid age');
        isValid = false;
    } else {
        correctInput(ageInput);
    }

    // Validate gender
    if (genderValue === 'gender') {
        incorrectInput(genderInput, '*required');
        isValid = false;
    } else {
        correctInput(genderInput);
    }

    // Validate email
    if (emailValue === '') {
        incorrectInput(emailInput, '*required');
        isValid = false;
    } else if (!checkMail(emailValue)) {
        incorrectInput(emailInput, '*Provide a valid email address');
        isValid = false;
    } else {
        correctInput(emailInput);
    }

    
    // Validate user entered password
    if (passwordValue === '') {
        incorrectInput(passwordInput, '*required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        incorrectInput(passwordInput, '*Password must be at least 8 characters');
        isValid = false;
    } else {
        correctInput(passwordInput);
    }


    return isValid;
};



// Calling validatInputs function when buttons are clicked
// Buttons in the first step
Next1.onclick = function(){
    if(validateInputs()){
        Form1.style.left = "-450px";
        Form2.style.left = "100px";
        progress.style.width = "300px";
    }
}

// Buttons in the second step
Back1.onclick = function(){
    Form1.style.left = "100px";
    Form2.style.left = "550px";
    progress.style.width = "150px";
}


Next2.onclick = function(){
    if(detectErrorGenre()){
        Form2.style.left = "-550px";
        Form3.style.left = "100px";
        progress.style.width = "450px";
    }
}

// Buttons in the third step
Back2.onclick = function(){
    Form2.style.left = "100px";
    Form3.style.left = "550px";
    progress.style.width = "300px";
}


Finish.onclick = function(){
    if(validateInputsForm3()){
        printCompleteMessage();
    }
}


// Assign options for the genre
var genres = [
    { id: "action", name: "  Action" },
    { id: "adventure", name: "  Adventure" },
    { id: "animation", name: "  Animation" },
    { id: "comedy", name: "  Comedy" },
    { id: "romance", name: "  Romance" },
    { id: "crime", name: "  Crime" },
    { id: "horror", name: "  Horror" },
    { id: "family", name: "  Family" },
    { id: "fantasy", name: "  Fantasy" },
    { id: "sports", name: "  Sports" },
    { id: "superhero", name: "  SuperHero" },
    { id: "historical", name: "  Historical" },
  ];
  
  var checkboxContainer = document.querySelector(".checkbox-container");
  

  // Function to assign ID names, div tags and labels for each genre
  genres.forEach(function(genre) {
    var div = document.createElement("div");
    div.className = "input2";
    
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = genre.id;
    input.name = genre.id;
    
    var label = document.createElement("label");
    label.setAttribute("for", genre.id);
    label.textContent = genre.name;
    
    div.appendChild(input);
    div.appendChild(label);
    checkboxContainer.appendChild(div);
    
  });


// Function to validate the genre selection
function selectGenres(){
    var selectElement = document.getElementById("genre");
    var selectedGenres = [];

    for (var i = 0; i < selectElement.options.length; i++) {
        var option = selectElement.options[i];
        
        if (option.selected) {
          selectedGenres.push(option.value);
          option.setAttribute("selected", "selected"); 
        } else {
          option.removeAttribute("selected"); 
        }
      }
}
  


// Show error message when an option is clicked in the genre section
function detectErrorGenre(){
    var a = document.querySelectorAll(".checkbox-container input[type='checkbox']");
    for(i=0; i<a.length;i++){
        if(a[i].checked==true)
        return true;
    }
    document.getElementById("error_genre").innerText="*Please select any genre"
    return false;
};



// Validate user input values in the third step
const validateInputsForm3 = () => {
    let isValidForm3 = true;

    const occassionValue = occassionInput.value.trim();
    const langValue = languageInput.value.trim();
    const numOfMovies = itemsInput.value.trim();

    if (occassionValue === 'Occassion') {
        incorrectInput(occassionInput, '*required');
        isValidForm3 = false;
    } else {
        correctInput(occassionInput);
    }

    if (langValue === 'Language') {
        incorrectInput(languageInput, '*required');
        isValidForm3 = false;
    } else {
        correctInput(languageInput);
    }

    if (numOfMovies === 'moviesCount') {
        incorrectInput(itemsInput, '*required');
        isValidForm3 = false;
    } else {
        correctInput(itemsInput);
    }
    
    return isValidForm3;
};


// Function to change the eye images when clicked
eyeIcon.addEventListener("click", function() {
    if (password.type === "password") {
      password.type = "text";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    } else {
      password.type = "password";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    }
  });


//Function to display the user input name
function printCompleteMessage(){
    const name = usernameInput.value;
    const output = document.getElementById("completeMessage");
    alert('Dear ' +name+ ', Thank you for using CINEWAY, the recommended results will be shown in a while.');
    window.location.href="Index.html";
}



