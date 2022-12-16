const player = document.querySelector("#user");
const computer = document.querySelector("#computer");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const round = document.querySelector("#round");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const choice = ["Paper", "Rock", "Scissors"];

function computerSelection () {
    return choice[Math.floor(Math.random()*choice.length)];
}

paper.addEventListener("click", function(){
    console.log("user selected paper");
});

rock.addEventListener("click", function(){
    console.log("user selected rock")    
});
scissors.addEventListener("click",function(){
    console.log("user selected scissors")
} );