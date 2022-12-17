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

//PlayRound function to play rounds of the game and accept user and computer choices
function playRound(userChoice){
    const computerChoice = computerSelection();
    const userTag = "User".fontsize(3).sub();
    const computerTag = "Comp".fontsize(3).sub();
    switch (userChoice + computerChoice){
        case "PaperRock":
            result.innerHTML = `${userChoice}${userTag} Covers ${computerTag}${computerChoice}. You Won This Round!🎇`

        case "RockScissors":
            result.innerHTML = `${userChoice}${userTag} Smashes ${computerTag}${computerChoice}. You Won This Round!🎇`
            
        case "ScissorsPaper":
            result.innerHTML = `${userChoice}${userTag} Cuts ${computerTag}${computerChoice}. You Won This Round!🎇`
            break;

        case "RockPaper":
            result.innerHTML = `${computerChoice}${computerTag} Covers ${userTag}${userChoice}. You Lose This Round!😒`

        case "ScissorsRock":
            result.innerHTML = `${computerChoice}${computerTag} Smashes ${userTag}${userChoice}. You Lose This Round!😒`

        case "PaperScissors":
            result.innerHTML = `${computerChoice}${computerTag} Cuts ${userTag}${userChoice}. You Lose This Round!😒`
            break;

        case "RockRock":
            result.innerHTML = `${userChoice}${userTag} Equals ${computerTag}${computerChoice}..This Round is a Tie!😕`;
            
        case "ScissorsScissors":
            result.innerHTML = `${userChoice}${userTag} Equals ${computerTag}${computerChoice}.This Round is a Tie!😕`;

        case "PaperPaper":
            result.innerHTML = `${userChoice}${userTag} Equals ${computerTag}${computerChoice}..This Round is a Tie!😕`;
            break; 
    }
    console.log(userChoice);
    console.log(computerChoice);
}

//Function to initiate user selection
function userSelection(){
    paper.addEventListener("click", function(){
        playRound("Paper");
        lastMove.innerHTML = `Your Last Move Was Paper 🖐️`;
    });

    rock.addEventListener("click", function(){
        playRound("Rock");
        lastMove.innerHTML = `Your Last Move Was Rock ✊`;    
    });
    scissors.addEventListener("click",function(){
        playRound("Scissors");
        lastMove.innerHTML = `Your Last Move Was Scissors ✌️`;
    } );
}
userSelection();