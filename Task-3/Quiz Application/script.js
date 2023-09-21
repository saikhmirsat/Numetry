import questions from "./Questions.js";

console.log(questions);

let currentQuestionIndex = 0;
let score = 0;
let optionSelected = false;

const questionText = document.getElementById("question_text");
const optionsContainer = document.getElementById("options_container");
const nextButton = document.getElementById("next_button");
const resultContainer = document.getElementById("result_container");
const scoreText = document.getElementById("score_text");
const scoreDisplay = document.getElementById("score");
const totalQuestion = document.getElementById("total_question")
const fullmarks = document.getElementById("your_full_marks")
const wrongAnsCount = document.getElementById("wrong_answer_count")
const correctAnsCount = document.getElementById("currect_ans_count")
const reStartBTN = document.getElementById('restart_btn')

reStartBTN.addEventListener('click', () => {
    const userConfirmed = confirm("Are you sure you want to restart?");


    if (userConfirmed) {
        window.location.reload()
    }
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `Qn.  ${currentQuestion.question}`;
    optionsContainer.innerHTML = "";

    currentQuestion.options.map((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.append(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    optionSelected = true;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.textContent = "";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = score;
    totalQuestion.innerText = `Total questions : ${questions.length + 1}`
    fullmarks.innerText = `Your Quiz full marks is ${questions.length + 1}`
    wrongAnsCount.innerText = `Your ${questions.length + 1 - score} answer is wrong.`
    correctAnsCount.innerText = `Your ${score} anwesrs is correct. `

}

loadQuestion();

nextButton.addEventListener("click", () => {
    optionSelected = false
    console.log(optionSelected)
    if (!optionSelected) {
        alert("Please select an option before moving to the next question.");
    }

    if (currentQuestionIndex < questions.length) {

        loadQuestion();
    } else {
        showResult();

    }
});
