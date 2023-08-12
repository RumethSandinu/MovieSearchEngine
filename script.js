const startBtn = document.querySelector('.start-btn');
const popup = document.querySelector('.popup');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const eXitBtn = document.querySelector('.eXit-btn');

startBtn.onclick = () =>{
    popup.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () =>{
    popup.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = () =>{
    quizSection.classList.add('active');
    popup.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore()

}
tryAgainBtn.onclick = () =>{
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

     questionCount = 0;
     questionNumb = 1;
     userScore = 0;
     showQuestions(questionCount);
     questionCounter(questionNumb);

     headerScore();

}

eXitBtn.onclick = () =>{
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

     questionCount = 0;
     questionNumb = 1;
     userScore = 0;
     showQuestions(questionCount);
     questionCounter(questionNumb);

}
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn= document.querySelector('.next-btn');

nextBtn.onclick = () =>{
    if(questionCount < questions.length - 1) { 
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove('active');
   } 
   else {
    showResultBox()
   }
}
const optionList= document.querySelector('.option-list');

//getting questions and options from array
    function showQuestions(index) {
        const questionText = document.querySelector(".question-text");
        questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

        let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
            <div class="option"><span>${questions[index].options[1]}</span></div>
            <div class="option"><span>${questions[index].options[2]}</span></div>
            <div class="option"><span>${questions[index].options[3]}</span></div>`;
        
        
        optionList.innerHTML = optionTag;

        const option = document.querySelectorAll('.option');
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute('onclick','optionSelected(this)');
        }
    }

    function optionSelected(answer) {
        let userAnswer = answer.textContent;
        let correctAnswer = questions[questionCount].answer;
        let allOptions = optionList.children.length;
        
        if(userAnswer == correctAnswer) {
            answer.classList.add('correct');
            userScore += 1;
            headerScore();
        }
        else{
            answer.classList.add('incorrect');

            for (let i =0; i < allOptions; i++) {
                if (optionList.children[i].textContent== correctAnswer) {
                    optionList.children[i].setAttribute('class','option correct');
                }
            }

        }

        for (let i =0; i < allOptions; i++) {
            optionList.children[i].classList.add('disabled');
        }
        nextBtn.classList.add('active');
    }

    function questionCounter(index) {
        const questionTotal = document.querySelector('.question-total');
        questionTotal.textContent = `${index} of ${questions.length} Questions` ;
    }

    function headerScore(){
        const headerScoreText = document.querySelector('.header-score');
        headerScoreText.textContent =`Score: ${userScore}/ ${questions.length}`;
    }
    function showResultBox(){
        quizBox.classList.remove('active');
        resultBox.classList.add('active');

        const scoreText = document.querySelector('.score-text');
        scoreText.textContent =`Your Score ${userScore} out of ${questions.length}`;

        const circularProgress = document.querySelector('.circular-progress');
        const ProgressValue = document.querySelector('.progress-value');
        let ProgressStartValue = -1;
        let ProgressEndValue = (userScore / questions.length) *100;
        let speed = 20;

        let progress = setInterval(() => {
            ProgressStartValue++;
            
            ProgressValue.textContent = `${ProgressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#c40094 ${ProgressStartValue * 3.6}deg, rgba(255,255,255,.1) 0deg)`;

            if(ProgressStartValue==ProgressEndValue) {
                clearInterval(progress);
            }

        },speed);


    }

    let questions =[
        {
            numb:1,
            question:"Which actor played the character Iron Man in the Marvel Cinematic Universe?",
            answer:"B. Robert Downey Jr.",
            options: [
                "A. Chris Evans",
                "B. Robert Downey Jr.",
                "C. Chris Hemsworth",
                "D. Mark Ruffalo",
    
            ]  
    
        },
        {
            numb:2,
            question:"Which movie won the Academy Award for Best Picture in 2020?",
            answer:"A. Parasite",
            options: [
                "A. Parasite",
                "B. Joker",
                "C. The Shape of Water",
                "D. Green Book",
                
            ]  
    
        },
        {
            numb:3,
            question:"Who directed the movie The Dark Knight?",
            answer:"A. Christopher Nolan",
            options: [
                "A. Christopher Nolan",
                "B. Steven Spielberg",
                "C. Martin Scorsese",
                "D. Quentin Tarantino"
                
            ]  
    
        },
        {
            numb:4,
            question:"Which film features the iconic line, 'Here's looking at you, kid'?",
            answer:"B. Casablanca",
            options: [
                "A. Gone with the Wind",
                "B. Casablanca",
                "C. The Godfather",
                "D. Citizen Kane"
                
            ]  
    
        },
        {
            numb:5,
            question:"In the Harry Potter film series, which house does Harry belong to?",
            answer:"C. Gryffindor",
            options: [
                "A. Hufflepuff",
                "B. Ravenclaw",
                "C. Gryffindor",
                "D. Slytherin",
                
            ]  
    
        },
    ];