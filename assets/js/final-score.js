let inputInitials = document.querySelector("#input-initials");
let submitInitials = document.querySelector("#submit-initials");
console.log(submitInitials, "submitIntials el");

let highScores = [];

let getFinalScore = function () {
  finalScore.textContent = localStorage.getItem("myScore");
  console.log(localStorage.getItem("myScore"));
};

let saveInitials = function () {
  console.log("It hit saveInitials");
  let highScoreObj = {
    initials: inputInitials.value,
    score: localStorage.getItem("myScore"),
  };
  highScores = localStorage.getItem("highScores");
  highScores = JSON.parse(highScores);
  highScores.push(highScoreObj);
  localStorage.setItem("highScores", JSON.stringify(highScores));
};

submitInitials.addEventListener("click", saveInitials);

getFinalScore();
