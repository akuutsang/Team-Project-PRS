const player = document.querySelector("#user");
const computer = document.querySelector("#computer");
let userScore = document.querySelector("#user-score").innerHTML;
let computerScore = document.querySelector("#computer-score").innerHTML;
let round = document.querySelector("#round").innerHTML;
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result")
const lastMove = document.querySelector("#instruction");

// ComputerSelcetion function to get computer choice
function computerSelection () {
    const choice = ["Paper", "Rock", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

function userSelection(){
    paper.addEventListener("click", function(){
        lastMove.innerHTML = `Your Last Move Was Paper 🖐️`;
    });

    rock.addEventListener("click", function(){
        lastMove.innerHTML = `Your Last Move Was Rock ✊`;    
    });
    scissors.addEventListener("click",function(){
        lastMove.innerHTML = `Your Last Move Was Scissors ✌️`;
    } );
}