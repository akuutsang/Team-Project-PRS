const player = document.querySelector("#user");
const computer = document.querySelector("#computer");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const round = document.querySelector("#round");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
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
function win(){
    playerScore++;
    gameRound++;
    round.innerHTML = gameRound;
    userScore.innerHTML = playerScore;
    computerScore.innerHTML = compScore;
}

//Create a Lose function to update Scores and Rounds for user and computer
function lose(){
    compScore++;
    gameRound++;
    round.innerHTML = gameRound;
    userScore.innerHTML = playerScore;
    computerScore.innerHTML = compScore;
}

//Create a tie function to update Scores and Rounds for user and computer
function tie(){
    gameRound++;
    round.innerHTML = gameRound;
    userScore.innerHTML = playerScore;
    computerScore.innerHTML = compScore;
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
            win();
            break;

        case "RockPaper":
            result.innerHTML = `${computerChoice}${computerTag} Covers ${userTag}${userChoice}. You Lose This Round!😒`

        case "ScissorsRock":
            result.innerHTML = `${computerChoice}${computerTag} Smashes ${userTag}${userChoice}. You Lose This Round!😒`

        case "PaperScissors":
            result.innerHTML = `${computerChoice}${computerTag} Cuts ${userTag}${userChoice}. You Lose This Round!😒`
            lose();
            break;

        case "RockRock":
            result.innerHTML = `${userChoice}${userTag} Equals ${computerTag}${computerChoice}..This Round is a Tie!😕`;
            
        case "ScissorsScissors":
            result.innerHTML = `${userChoice}${userTag} Equals ${computerTag}${computerChoice}.This Round is a Tie!😕`;

        case "PaperPaper":
            result.innerHTML = `${userChoice}${userTag} Equals ${computerTag}${computerChoice}..This Round is a Tie!😕`;
            tie();
            break; 
    }
}

//Function to initiate user selection
function userSelection(){
for(let i = 1; i <= 5; i++){
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
    if(playerScore > compScore){
        result.innerHTML = `Wow Congratulations you Won the Game!!!🏆🏆`;
    } else if(playerScore < compScore){
        result.innerHTML = `Whoaaa You Lost the Game!!!💩💩`;
    } else{
        result.innerHTML = `It was an Exciting Game to Decide, Its A Tie!!!🎇🎇`
    }
}

userSelection();