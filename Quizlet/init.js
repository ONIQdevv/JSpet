const quizlet = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C#",
        c: "JavaScript",
        d: "React",
        correct: "c",
    },
    {
        question: "Who is the President of US?",
        a: "Donald Trump",
        b: "Volodymyr Zelenskiy",
        c: "Emmanuel Macron",
        d: "Boris Johnson",
        correct: "a",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<javascript>",
        c: "<script>",
        d: "<scripting>",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const answer_a = document.getElementById("answer_a");
const answer_b = document.getElementById("answer_b");
const answer_c = document.getElementById("answer_c");
const answer_d = document.getElementById("answer_d");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizlet[currentQuiz];

    question.innerText = currentQuizData.question;
    answer_a.innerText = currentQuizData.a;
    answer_b.innerText = currentQuizData.b;
    answer_c.innerText = currentQuizData.c;
    answer_d.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;
    answers.forEach((answerEl) => {
        if (answerEl.checked) answer = answerEl.id;

    });
    return answer;

}

function deselectAnswers() {
    answers.forEach((answerEl) => {
        answerEl.checked = false;

    });

}

submit.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizlet[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizlet.length) loadQuiz();

        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizlet.length} questions.</h2>
                                <button onclick="location.reload()">Reload</button>`;
        }

    }

});
