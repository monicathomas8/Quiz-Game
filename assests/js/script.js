
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
    {
        question : "What kind of Amenial is Marcel",
        answers: {
            a: "A capuchin monkey",
            b: "A squirrel monkey",
            c: "A panamanian white-faced monkey",
        },
        correctAnswer: 'a'
    },
    {
        question : "Who did Phobie marry at the end of the series?",
        answers: {
            a: "Mike Hannigan",
            b: "Mike Hanson",
            c: "Mike Harris",
        },
        correctAnswer: 'a'
    },
    {
        question : "What is the name of Joey's agent?",
        answers: {
            a: "Estelle Logan",
            b: "Estelle Leon",
            c: "Estelle Leonard",
        },
        correctAnswer: 'c'
    },
    {
        question : "Where did Rachel and Ross have their first kiss?",
        answers: {
            a: "Monica's appartment",
            b: "Central Perk",
            c: "At the museum",
        },
        correctAnswer: 'b'
    },
    {
        question : "What food does Ross claim he invented in college?",
        answers: {
            a: "The holiday sandwich.",
            b: "The gravy maker sandwich.",
            c: "The moist maker sandwich.",
        },
        correctAnswer: 'c'
    },
    {
        question : "Where does Chandler tell Janice he is moving to avoid seeing her again?",
        answers: {
            a: "Ukraine",
            b: "Yemen",
            c: "Kenya",
        },
        correctAnswer: 'b'
    },
    {
        question : "What name appears on the TV guide that Chandler and Joey receive?",
        answers: {
            a: "Miss Chandler Bing",
            b: "Mrs Chandler Bong",
            c: "Miss Chandler Bong",
        },
        correctAnswer: 'c'
    },
    {
        question : "Which of Joey's sisters did Chandler kiss?",
        answers: {
            a: "Mary Angela",
            b: "Marie Angela",
            c: "Macie Angie",
        },
        correctAnswer: 'a'
    },
    {
        question : "What was the name of Monica's senior prom date who got drunk and passed out in the bathroom?",
        answers: {
            a: "Roy Gubilk",
            b: "Roy Goodburk",
            c: "Roy Goodman",
        },
        correctAnswer: 'a'
    },
    {
        question : "What fruit is Ross allergic to?",
        answers: {
            a: "Lemon",
            b: "Mango",
            c: "Kiwi",
        },
        correctAnswer: 'c'
    },
    {
        question : "Whats was the name of Joey's boat?",
        answers: {
            a: "The Mr. Boamont",
            b: "The Mr. Beaumont",
            c: "The Mr. beamont",
        },
        correctAnswer: 'b'
    },
    {
        question : "Who was Monica's first boyfriend on the show?",
        answers: {
            a: "Paul",
            b: "Steve",
            c: "Brian",
        },
        correctAnswer: 'a'
    },
    {
        question : "What is Phobies fake name?",
        answers: {
            a: "Regina-lee Pangee",
            b: "Regina Flangie",
            c: "Regina Phalange",
        },
        correctAnswer: 'c'
    },
    {
        question : "Who is Ross's first wife?",
        answers: {
            a: "Carol Wick",
            b: "Carol Willick",
            c: "Carol Wicks",
        },
        correctAnswer: 'b'
    },
    {
        question : "Whats the name of joey's character in his World War 1 movie?",
        answers: {
            a: "Mac Machiavelli",
            b: "Mike Machiavelli",
            c: "Mark Machiavelli",
        },
        correctAnswer: 'a'
    },
    {
        question : "What is the name of the girl Ross dated whonshaved her hair off?",
        answers: {
            a: "Ronni",
            b: "Bonnie",
            c: "abby",
        },
        correctAnswer: 'b'
    },
    {
        question : "What was the profession of Rachel's ex-fiance?",
        answers: {
            a: "Dentist",
            b: "Orthodontist",
            c: "Endodontist",
        },
        correctAnswer: 'b'
    },
    {
        question : "How many years was Ross married to Carol",
        answers: {
            a: "7",
            b: "8",
            c: "9",
        },
        correctAnswer: 'c'
    },
    {
        question : "How much does Monica get charged for returning a late rental video?",
        answers: {
            a: "$4",
            b: "$5",
            c: "$6",
        },
        correctAnswer: 'c'
    },
    {
        question : "How many times does Chandler date Janice?",
        answers: {
            a: "4",
            b: "5",
            c: "3",
        },
        correctAnswer: '4'
    },
    {
        question : "How many boyfriends did Monica have in the show?",
        answers: {
            a: "7",
            b: "9",
            c: "6",
        },
        correctAnswer: 'b'
    },
    {
        question : "How many dates does Rachel go on in the show?",
        answers: {
            a: "19",
            b: "18",
            c: "17",
        },
        correctAnswer: 'a'
    },
    {
        question : "Who was the longest guest star on the show?",
        answers: {
            a: "James Michael Tyler",
            b: "Bruce Willis",
            c: "Helen Baxendale",
        },
        correctAnswer: 'a'
    },
    {
        question : "How long did Ross do Karate for?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
        },
        correctAnswer: 'b'
    },  
    {
        question : "How many significant dates does Ross have in the show?",
        answers: {
            a: "14",
            b: "15",
            c: "16",
        },
        correctAnswer: '14'
    },
    {
        question : "What is Joey's favorite food?",
        answers: {
            a: "sandwiches",
            b: "pizza",
            c: "jam",
        },
        correctAnswer: 'a'
    },
    {
        question : "Who sang the theme song of the show?",
        answers: {
            a: "The Ronnies",
            b: "The Rembrandts",
            c: "U2",
        },
        correctAnswer: 'b'
    },
]
// Current question index
let currentQuestionIndex = 0;

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
    }
}

// Function to end the game
function endGame() {
    alert("See ya soon!!");
    console.log("Left game");
    window.location.href = "feedback.html";
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
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < myQuestions.length) {
        showQuestion();
        showAnswers();
    } else {
        alert("Quiz over!");
        // You can add more actions here, like showing the final score or restarting the quiz
    }
}

// Event listener for the "I'm Ready" button
document.getElementById("btns").addEventListener("click", startGame);

// Event listener for the "Quit" button
document.getElementById("btnl").addEventListener("click", endGame);