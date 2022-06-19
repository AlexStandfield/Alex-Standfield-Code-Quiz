let question = document.querySelector('#question');
let answer1 = document.querySelector('#answer-1');
let answer2 = document.querySelector('#answer-2');
let answer3 = document.querySelector('#answer-3');
let answer4 = document.querySelector('#answer-4');
let allAnswers = [answer1, answer2, answer3, answer4];
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
        correctAnswer: 'Alerts',
        a1: 'Strings',
        a2: 'Booleans',
        a3: 'Numbers'
    },
    {
        question: 'The condition of an if/else statement is enclosed within ____.',
        correctAnswer: 'Curley Brackets',
        a1: 'Quotes',
        a2: 'Parentheses',
        a3: 'Square bracket'
    },
    {
        question: 'Arrays in Javascript can be used to store ____.',
        correctAnswer: 'All of the below',
        a1: 'Numbers and Strings',
        a2: 'Other Arrays',
        a3: 'Booleans'
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        correctAnswer: 'Quotes',
        a1: 'Commas',
        a2: 'Curly Brackets',
        a3: 'Parentheses'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        correctAnswer: 'console.log',
        a1: 'Javascript',
        a2: 'Terminal/Bash',
        a3: 'for loops'
    }
];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}