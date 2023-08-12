// Define the quiz questions and correct answers
const quizData = [
    {
        question: "Which actor played the character Iron Man in the Marvel Cinematic Universe?",
        options: {
            A: "Chris Evans",
            B: "Chris Hemsworth",
            C: "Robert Downey Jr",
            D: "Mark Ruffalo"
        },
        answer: "C"
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        options: {
            A: "1917",
            B: "Joker",
            C: "Parasite",
            D: "Once Upon a Time in Hollywood"
        },
        answer: "C"
    },
    {
        question: "Who directed the movie The Dark Knight?",
        options: {
            A: "Steven Spielberg",
            B: "James Cameron",
            C: "Christopher Nolan",
            D: "Martin Scorsese"
        },
        answer: "C"
    },
    {
        question: "Which film features the iconic line, 'Here's looking at you, kid'?",
        options: {
            A: "Gone with the Wind",
            B: "Casablanca",
            C: "The Godfather",
            D: "Citizen Kane"
        },
        answer: "B"
    },
    {
        question: "In the Harry Potter film series, which house does Harry belong to?",
        options: {
            A: "Gryffindor",
            B: "Slytherin",
            C: "Hufflepuff",
            D: "Ravenclaw"
        },
        answer: "A"
    }
];

// Function to start the quiz
function startQuiz() {
    let score = 0; // Initialize the quiz score to 0

    // Loop through each question in the quizData array
    for (let i = 0; i < quizData.length; i++) {
        let userAnswer;
        let validInput = false;

        // Continue asking the question until the user provides a valid input
        while (!validInput) {
            // Prompt the user with the current question and available options
            userAnswer = prompt(`${quizData[i].question}\n${Object.keys(quizData[i].options).map(option => `${option}: ${quizData[i].options[option]}`).join("\n")}`).toUpperCase();

            // Check if the answer is one of the valid options (A, B, C, D) or if the user cancels the prompt
            if (userAnswer === null || (userAnswer in quizData[i].options)) {
                validInput = true;
            } else {
                // Display an alert for invalid input and prompt again
                alert("Invalid input! Please choose one of the available options (A, B, C, D).");
            }
        }

        // If the user cancels the prompt, exit the quiz
        if (userAnswer === null) {
            alert("Quiz canceled.");
            return;
        }

        // Check if the answer is correct and update the score accordingly
        if (userAnswer === quizData[i].answer) {
            score += 2;
        } else {
            score -= 1;
        }
    }

    // Display the final quiz result
    displayResult(score);
}



//Function to show the popup with an image
function showPopup(message, badgeImageSrc) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const badgeImage = document.getElementById("badge-image");
    
    popupMessage.textContent = message;
    badgeImage.src = badgeImageSrc; // Set the src attribute of the image

    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    window.location.href = 'Index.html';
}

// Function to display the result
function displayResult(score) {
    let badge = "Bronze";
    let badgeImageSrc = "images/Bronze.gif"; //  bronze badge image

    if (score >= 8) {
        badge = "Gold";
        badgeImageSrc = "images/gold.gif"; //  gold badge image
    } else if (score >= 4) {
        badge = "Silver";
        badgeImageSrc = "images/silver.gif"; // silver badge image
    }

    const message = `Congratulations! You have earned ${score} points with a ${badge} badge. Please claim the points in your next purchase.`;
    showPopup(message, badgeImageSrc); // Pass the badge image URL to the showPopup function
}