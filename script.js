const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
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

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    // console.log(quizData.length)
    if(currentQuiz === quizData.length ){
        end();
    }
    
    // deselectAnswers()
    const data = quizData[currentQuiz]
    questionEl.innerHTML = data.question;
    a_text.innerText = data.a;
    b_text.innerText = data.b;
    c_text.innerText = data.c;
    d_text.innerText = data.d;

}

function deselectAnswers() {
    answerEls.forEach((radio) => {
        radio.checked = false;
    });
}

function getSelected() {
    let ans = "";
    answerEls.forEach((radio) => {
        if(radio.checked){
            ans =  radio.value
        }
    })
    return ans
}

submitBtn.addEventListener('click', () => {
    const data = quizData[currentQuiz]
    let selected = getSelected();
    // console.log(selected)
    if(selected === data.correct) {
        score = score + 1;
    }
    setTimeout(() => {
        currentQuiz++;
        loadQuiz();
        deselectAnswers();
    }, 2000);
    
})
function end() {
    quiz.innerHTML = `<h3>Thank you for playing the quiz, Your Score is: ${score}</h3>`
}