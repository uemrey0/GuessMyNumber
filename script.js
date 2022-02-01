"use strict";
const get = {
  getRandom: function (max) {
    return Math.floor(1 + Math.random() * (max + 1));
  },
  getWinLose: function (color, text) {
    document.getElementById("check").disabled = true;
    document.getElementById("number").innerHTML = number;
    document.getElementById("massage").innerHTML = text;
    document.body.style.backgroundColor = color;
    document.getElementById("number").style.width = "25rem";
  },
  getWrongGuess: function (highOrLow) {
    document.getElementById("massage").innerHTML = `Too ${highOrLow}...`;
    document.getElementById("score").innerHTML = --score;
  },
};
//variables
let score = 20;
let hiscore = 0;
let number = get.getRandom(20);
//functions
function reset() {
  score = 20;
  number = get.getRandom(20);
  document.body.style.backgroundColor = "#222";
  document.getElementById("massage").innerHTML = "Start guessing...";
  document.getElementById("number").innerHTML = "?";
  document.getElementById("score").innerHTML = score;
  document.getElementById("guess").value = "";
  document.getElementById("check").disabled = false;
}
function check() {
  const guess = document.getElementById("guess").value;
  if (number == guess) {
    get.getWinLose("green", "Correct!");
    if (hiscore < score) {
      hiscore = score;
      document.getElementById("hiscore").innerHTML = hiscore;
    }
  } else if (number < guess) {
    get.getWrongGuess("high");
  } else if (number > guess) {
    getWrongGuess("low");
  }
  if (score === 0) {
    get.getWinLose("red", "You lose!");
  }
}

document.querySelector("#check").addEventListener("click", function () {
  check();
});
document.querySelector("#again").addEventListener("click", function () {
  reset();
});
