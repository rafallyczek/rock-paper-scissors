const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const INVALID_INPUT = -1;

const COMPUTER_WIN = 0;
const PLAYER_WIN = 1;

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click",function(){
    playRound(+this.value,getComputerChoice());
}));

const resultContainer = document.querySelector(".result");
const scoreContainer = document.querySelector(".score");
const winnerContainer = document.querySelector(".winner");

function getComputerChoice(){

    return Math.floor(Math.random()*3);

}

function updateResults(message, color){

    const resultInfo = document.createElement("p");
    resultInfo.textContent = message;
    resultInfo.style.color = color;
    resultContainer.appendChild(resultInfo);

}

function playRound(playerChoice,computerChoice){

    if(playerChoice==computerChoice){
        updateResults("It's a tie!", "goldenrod");
    }else if(playerChoice==ROCK){
        if(computerChoice==PAPER){
            updateResults("You Lose! Paper beats Rock.", "red");
            chooseRoundWinner(COMPUTER_WIN);
        }else{
            updateResults("You Win! Rock beats Scissors.", "green");
            chooseRoundWinner(PLAYER_WIN);
        }
    }else if(playerChoice==PAPER){
        if(computerChoice==ROCK){
            updateResults("You Win! Paper beats Rock", "green");
            chooseRoundWinner(PLAYER_WIN);
        }else{
            updateResults("You Lose! Scissors beats Paper", "red");
            chooseRoundWinner(COMPUTER_WIN);
        }
    }else{
        if(computerChoice==ROCK){
            updateResults("You Lose! Rock beats Scissors.", "red");
            chooseRoundWinner(COMPUTER_WIN);
        }else{
            updateResults("You Win! Scissors beats Paper.", "green");
            chooseRoundWinner(PLAYER_WIN);
        }
    }

    scoreContainer.textContent = `Current score is: player ${playerScore}:${computerScore} computer`;
    checkGameWinner();

}

function chooseRoundWinner(winner){

    if(winner==COMPUTER_WIN){
        computerScore++;
    }else{
        playerScore++;
    }

}

function checkGameWinner(){

    if(playerScore<5 && computerScore<5){
        return;
    }else if(playerScore>computerScore){
        winnerContainer.textContent = "You won the game!";
        winnerContainer.style.backgroundColor = "green";
    }else{
        winnerContainer.textContent = "You lost the game!";
        winnerContainer.style.backgroundColor = "red";
    }
    scoreContainer.textContent = `Final score is: player ${playerScore}:${computerScore} computer`;

}

function game(){

    console.clear();
    playerScore = 0;
    computerScore = 0;

    for(let i=0;i<5;i++){
        playRound(getPlayerChoice(),getComputerChoice());
        if(i!=4){
            console.log(`Current score is: player ${playerScore}:${computerScore} computer`);
        }
    }

    console.log(`Final score is: player ${playerScore}:${computerScore} computer`);

    if(playerScore>computerScore){
        console.log("%cYou win!","background: green; color: black");
    }else if(playerScore<computerScore){
        console.log("%cYou lose!","background: red; color: black");
    }else{
        console.log("%cIt's a tie!","background: goldenrod; color: black");
    }

}