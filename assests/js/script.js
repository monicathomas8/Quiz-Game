
let start = document.getElementById("btns");
let end = document.getElementById("btnl");

var myQuestions = [
    {
        question : "what are the names of Ross and Monica's parents?",
        answers:{
            a: "Jack and Judy Geller",
            b: "jack and Judy Gellar",
            c: "Jake and Jude Galler",
        },
        correctAnswer: 'a'
    },
    {
        question : "What is Joey's famous pick up line?",
        answers:{
            a: "How you doing?",
            b: "hows you doing?",
            c: "how you doin'?",
        },
        correctAnswer: 'c'
    },
    {
        question : "What is the name of the coffee shop the friends frequently visit?",
        answers: {
            a: "Centre Perk",
            b: "Central Perk",
            c: "Central Peek",
        },
        correctAnswer: 'b'
    },
    {
        question : "What instrument does Ross Play?",
        answers: {
            a: "He doesn't!",
            b: "Bagpipes",
            c: "keyboard",
        },
        correctAnswer: 'c'
    },
    {
        question : "What is the name of Joey's stuffed penguin?",
        answers: {
            a: "Hugsie",
            b: "Hugsy",
            c: "Hugme",
        },
        correctAnswer: 'b'
    },
    {
        question : "What is Chandler's middle name?",
        answers: {
            a: "Marcel",
            b: "Murry",
            c: "Muriel",
        },
        correctAnswer: 'c'
    },
    {
        question : "What is the name of Phoebe's twin sister?",
        answers: {
            a: "Ursula Buffay",
            b: "Ursula Buffey",
            c: "Ursula Duffay",
        },
        correctAnswer: 'a'
    },
    {
        question : "What is the name of Ross's second wife?",
        answers: {
            a: "Emma",
            b: "Emily",
            c: "Amelie",
        },
        correctAnswer: 'b'
    },
    {
        question : "What does Chandler do for a living at the start of the series?",
        answers: {
            a: "He works in statistical analysis and data reconfiguration.",
            b: "He works in number data and analysis.",
            c: "He works in diagnostic analysis and data reform",
        },
        correctAnswer: 'a'
    },
    {
        question : "Who was Monica's first kiss ever?",
        answers: {
            a: "Chandler",
            b: "Ross",
            c: "Dave",
        },
        correctAnswer: 'b'
    },
]
// Current question index
let currentQuestionIndex = 0;
let timerInterval; // Variable to hold the interval for the timer
let wrongAnswers = 0; //variable to hold number of wrong answers

// Function to start the game
function startGame() {
    let name = prompt("What's your name?");
    console.log("Player is ready");
    if (name != null) {
        // Display the first question
        showQuestion();
        // Replace initial greeting with the first question
        document.getElementById("pp").textContent = myQuestions[currentQuestionIndex].question;
        // Show the answers for the first question
        showAnswers();
        // Start the timer
        startTimer();
    }
}

// Function to end the game
function endGame() {
    alert("See ya soon!!");
    console.log("Left game");
    // Stop the timer
    clearInterval(timerInterval);
    window.location.href = "feedback.html";
}

// Function to start the timer
function startTimer() {
    let timeLimit = 300; // Time limit in seconds (5 minutes)
    const timerDisplay = document.getElementById("timer");

    // Display initial timer value
    timerDisplay.textContent = formatTime(timeLimit);

    // Update the timer every second
    timerInterval = setInterval(() => {
        timeLimit--;
        timerDisplay.textContent = formatTime(timeLimit);

        // Check if time is up
        if (timeLimit <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            endGame(); // End the game when time is up
        }
    }, 1000); // Update every second (1000 milliseconds)
}

// Function to format time in MM:SS format
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Function to display the current question
function showQuestion() {
    const questionElement = document.getElementById("question");
    const currentQuestion = myQuestions[currentQuestionIndex];
    
    // Display the question
    questionElement.textContent = currentQuestion.question;
}

// Function to display the current answers
function showAnswers() {
    const answerButtons = document.querySelectorAll("#answers button");
    const currentQuestion = myQuestions[currentQuestionIndex];
    
    // Get answer options
    const answers = Object.values(currentQuestion.answers);

    // Display the answer options in buttons
    answerButtons.forEach((button, index) => {
        button.textContent = answers[index];
        button.disabled = false; // Enable the button
    });
}

// Function to check the selected answer
function check(selectedAnswerIndex) {
    const currentQuestion = myQuestions[currentQuestionIndex];
    const answerKeys = Object.keys(currentQuestion.answers);
    const selectedAnswerKey = answerKeys[selectedAnswerIndex];

    // Check if the selected answer is correct
    if (selectedAnswerKey === currentQuestion.correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
        wrongAnswers++;
        // End game if wrong answers reach 2
        if (wrongAnswers >= 2) {
            clearInterval(countdown);
            endGame();
            return;
        }
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < myQuestions.length) {
        showQuestion();
        showAnswers();
    } else {
        clearInterval(timerInterval); // Stop the timer at the end of the quiz
        alert("Quiz over!");
        // You can add more actions here, like showing the final score or restarting the quiz
    }
}

// Event listener for the "I'm Ready" button
document.getElementById("btns").addEventListener("click", startGame);

// Event listener for the "Quit" button
document.getElementById("btnl").addEventListener("click", endGame);