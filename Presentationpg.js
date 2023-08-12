// Assign variables
const text = "Welcome to CINEWAY";
const textContainer = document.getElementById("animated-text");
var video = document.querySelector('video');


// Adding effect to the heading of the webpage
function animateText() {
  let index = 0;
  const intervalId = setInterval(() => {
    textContainer.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(intervalId);
    }
  }, 100); 
}


// Function to shift to the main page in 5 seconds
function redirectToHomePage() {
  setTimeout(() => {
    window.location.href = "Index.html"; 
  }, 5000);
}


// Calling the functions
animateText();
redirectToHomePage();

