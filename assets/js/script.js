let question = document.querySelector('#question');
let answer1 = document.querySelector('#answer-1');
let answer2 = document.querySelector('#answer-2');
let answer3 = document.querySelector('#answer-3');
let answer4 = document.querySelector('#answer-4');
let timer = document.querySelector('#timer');
let finishQuizBox = document.querySelector('#finish-quiz-box');

let answerButton = document.querySelector('.btn');

let rightOrWrong = document.querySelector('#right-wrong');

let i = 0;

let score = 0;

let questionsArr = [
    {
        question: 'Commonly used data types DO NOT include:',
        correctAnswer: 'alerts',
        a1: 'strings',
        a2: 'booleans',
        a3: 'numbers'
    },
    {
        question: 'The condition of an if/else statement is enclosed within ____.',
        correctAnswer: 'curley brackets',
        a1: 'qoutes',
        a2: 'parentheses',
        a3: 'square bracket'
    },
    {
        question: 'Arrays in Javascript can be used to store ____.',
        correctAnswer: 'all of the above',
        a1: 'numbers and strings',
        a2: 'other arrays',
        a3: 'booleans'
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        correctAnswer: 'qoutes',
        a1: 'commas',
        a2: 'curly brackets',
        a3: 'parentheses'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        correctAnswer: 'console.log',
        a1: 'Javascript',
        a2: 'terminal/bash',
        a3: 'for loops'
    }
];

let getQuestions = function () {
    if (i <=4) {
        question.textContent = questionsArr[i].question
        answer1.textContent = questionsArr[i].correctAnswer
        answer2.textContent = questionsArr[i].a1
        answer3.textContent = questionsArr[i].a2
        answer4.textContent = questionsArr[i].a3
    } else {
        finishQuizBox.style.display = 'flex';
    }
};

let answerQuestion = function () {
    if (this.textContent === questionsArr[i].correctAnswer) {
        rightOrWrong.textContent = 'Correct!'
        score++;
        i++;
        getQuestions();
    } else {
        rightOrWrong.textContent = 'Wrong!'
        i++;
        getQuestions();
    }
};

getQuestions();

answer1.addEventListener('click', answerQuestion);
answer2.addEventListener('click', answerQuestion);
answer3.addEventListener('click', answerQuestion);
answer4.addEventListener('click', answerQuestion);