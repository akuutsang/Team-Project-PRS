const player = document.querySelector("#user");
const computer = document.querySelector("#computer");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const round = document.querySelector("#round");
const paper = document.querySelector("#Paper");
const rock = document.querySelector("#Rock");
const scissors = document.querySelector("#Scissors");
const result = document.querySelector("#result")
const lastMove = document.querySelector("#instruction");
let playerScore = 0;
let compScore = 0;
let gameRound = 1;


// ComputerSelcetion function to get computer choice
function computerSelection () {
    const choice = ["Paper", "Rock", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

//Create a win function to update Scores and Rounds for user and computer
function win(userChoice){
    playerScore++;
    gameRound++;
    round.innerHTML = gameRound;
    userScore.innerHTML = playerScore;
    computerScore.innerHTML = compScore;
    document.getElementById(userChoice).classList.add("greenGlow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("greenGlow")}, 400);
}

//Create a Lose function to update Scores and Rounds for user and computer
function lose(userChoice){
    compScore++;
    gameRound++;
    round.innerHTML = gameRound;
    userScore.innerHTML = playerScore;
    computerScore.innerHTML = compScore;
    document.getElementById(userChoice).classList.add("redGlow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("redGlow")}, 400);
}

//Create a tie function to update Scores and Rounds for user and computer
function tie(userChoice){
    gameRound++;
    round.innerHTML = gameRound;
    userScore.innerHTML = playerScore;
    computerScore.innerHTML = compScore;
    document.getElementById(userChoice).classList.add("yellowGlow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("yellowGlow")}, 400);
}

//PlayRound function to play rounds of the game and accept user and computer choices
function playRound(userChoice){
    const computerChoice = computerSelection();
    const userTag = "User".fontsize(3).sub();
    const computerTag = "Comp".fontsize(3).sub();
    switch (userChoice + computerChoice){
        case "PaperRock":

        case "RockScissors":
            
        case "ScissorsPaper":
            result.innerHTML = `${userChoice}${userTag} Beats ${computerTag}${computerChoice}. You Won This Round!🎇`;
            win(userChoice, computerChoice);
            break;

        case "RockPaper":

        case "ScissorsRock":

        case "PaperScissors":
            result.innerHTML = `${computerChoice}${computerTag} Beats ${userTag}${userChoice}. You Lose This Round!😒`;
            lose(userChoice, computerChoice);
            break;

        case "RockRock":
            
        case "ScissorsScissors":

        case "PaperPaper":
            result.innerHTML = `${userChoice}${userTag} Equals ${computerTag}${computerChoice}..This Round is a Tie!😕`;
            tie(userChoice, computerChoice);
            break; 
    }
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
    });
}

userSelection();