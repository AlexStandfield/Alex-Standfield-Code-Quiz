let question = document.querySelector('#question');
let answer1 = document.querySelector('#answer-1');
let answer2 = document.querySelector('#answer-2');
let answer3 = document.querySelector('#answer-3');
let answer4 = document.querySelector('#answer-4');
let timer = document.querySelector('#timer');
let finishQuizBox = document.querySelector('#finish-quiz-box');
let finishQuiz = document.querySelector('#finish-quiz')

let finalScore = document.querySelector('#final-score');

let answerButton = document.querySelector('.btn');

let rightOrWrong = document.querySelector('#right-wrong');

let i = 0;

let score = 0;

let questionsArr = [
    {
        question: 'Commonly used data types DO NOT include:',
        correctAnswer: '1. alerts',
        a1: '2. strings',
        a2: '3. booleans',
        a3: '4. numbers'
    },
    {
        question: 'The condition of an if/else statement is enclosed within ____.',
        correctAnswer: '1. curley brackets',
        a1: '2. qoutes',
        a2: '3. parentheses',
        a3: '4. square bracket'
    },
    {
        question: 'Arrays in Javascript can be used to store ____.',
        correctAnswer: '1. all of the below',
        a1: '2. numbers and strings',
        a2: '3. other arrays',
        a3: '4. booleans'
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        correctAnswer: '1. qoutes',
        a1: '2. commas',
        a2: '3. curly brackets',
        a3: '4. parentheses'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        correctAnswer: '1. console.log',
        a1: '2. Javascript',
        a2: '3. terminal/bash',
        a3: '4. for loops'
    }
];