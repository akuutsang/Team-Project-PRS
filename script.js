const player = document.querySelector("#user");
const computer = document.querySelector("#computer");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const round = document.querySelector("#round");

const choice = ["Paper", "Rock", "Scissors"];

function computerSelection () {
    return choice[Math.floor(Math.random()*choice.length)];
}
// console.log(computerSelection());