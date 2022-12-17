const player = document.querySelector("#user");
const computer = document.querySelector("#computer");
const userScore = document.querySelector("#user-score").innerHTML;
const computerScore = document.querySelector("#computer-score").innerHTML;
const round = document.querySelector("#round").innerHTML;
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");

function computerSelection () {
    const choice = ["Paper", "Rock", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}
console.log(computerSelection());


paper.addEventListener("click", function(){
    console.log("user selected paper");
});

rock.addEventListener("click", function(){
    console.log("user selected rock")    
});
scissors.addEventListener("click",function(){
    console.log("user selected scissors")
} );