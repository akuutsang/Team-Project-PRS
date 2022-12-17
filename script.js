const player = document.querySelector("#user");
const computer = document.querySelector("#computer");
const userScore = document.querySelector("#user-score").innerHTML;
const computerScore = document.querySelector("#computer-score").innerHTML;
const round = document.querySelector("#round").innerHTML;
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result").innerHTML;
const lastMove = document.querySelector("#instruction").innerHTML;

function computerSelection () {
    const choice = ["Paper", "Rock", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}


paper.addEventListener("click", function(){
    
});

rock.addEventListener("click", function(){
    console.log("user selected rock")    
});
scissors.addEventListener("click",function(){
    console.log("user selected scissors")
} );