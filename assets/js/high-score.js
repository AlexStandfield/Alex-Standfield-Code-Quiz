let savedHighScore = document.querySelector('#high-score');
let highScoreList = document.querySelector('#high-score-list')
let clearHighScoresBtn = document.querySelector('#clear-high-scores')

let savedScore
let savedInitials

let listItemEl

let getHighScore = function () {
    console.log(localStorage.getItem("highScores"))
    highScores = localStorage.getItem("highScores");
    highScores = JSON.parse(highScores);
    console.log(highScores);

    if (highScores === null) {
        return false
    } else {
        for (let v = 0; v < highScores.length; v++) {
            savedScore = highScores[v].score;
            savedInitials = highScores[v].initials;
            console.log(savedScore, savedInitials);
            
            listItemEl = document.createElement('li');
            listItemEl.className = "high-score";
            listItemEl.textContent = savedInitials + ' - ' + savedScore;
            
            highScoreList.appendChild(listItemEl);
        }
    }
};

let clearHighScores = function () {
    highScores = [];
    localStorage.setItem("highScores", JSON.stringify(highScores));
    while (highScoreList.firstChild) {
        highScoreList.removeChild(highScoreList.firstChild);
    };
    getHighScore();
};

clearHighScoresBtn.addEventListener('click', clearHighScores);

getHighScore();