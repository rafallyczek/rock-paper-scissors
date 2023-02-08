const ROCK = 0;
const PAPER = 1;

const COMPUTER_WIN = 0;
const PLAYER_WIN = 1;

let playerScore = 0;
let computerScore = 0;

const playButtons = document.querySelectorAll(".playButton");
playButtons.forEach(button => button.addEventListener("click",function(){
    playRound(+this.value,getComputerChoice());
}));

const playAgainButton = document.querySelector(".playAgainButton");
playAgainButton.addEventListener("click",reset);

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
    scoreContainer.style.visibility = "visible";

}

function playRound(playerChoice,computerChoice){

    if(playerChoice==computerChoice){
        updateResults("It's a tie!", "goldenrod");
    }else if(playerChoice==ROCK){
        if(computerChoice==PAPER){
            updateResults("You Lose! Paper beats Rock.", "#ff3333");
            chooseRoundWinner(COMPUTER_WIN);
        }else{
            updateResults("You Win! Rock beats Scissors.", "lightgreen");
            chooseRoundWinner(PLAYER_WIN);
        }
    }else if(playerChoice==PAPER){
        if(computerChoice==ROCK){
            updateResults("You Win! Paper beats Rock", "lightgreen");
            chooseRoundWinner(PLAYER_WIN);
        }else{
            updateResults("You Lose! Scissors beats Paper", "#ff3333");
            chooseRoundWinner(COMPUTER_WIN);
        }
    }else{
        if(computerChoice==ROCK){
            updateResults("You Lose! Rock beats Scissors.", "#ff3333");
            chooseRoundWinner(COMPUTER_WIN);
        }else{
            updateResults("You Win! Scissors beats Paper.", "lightgreen");
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
        winnerContainer.style.backgroundColor = "lightgreen";
    }else{
        winnerContainer.textContent = "You lost the game!";
        winnerContainer.style.backgroundColor = "#ff3333";
    }
    scoreContainer.textContent = `Final score is: player ${playerScore}:${computerScore} computer`;
    playButtons.forEach(button => button.disabled = true);
    playAgainButton.disabled = false;
    winnerContainer.style.visibility = "visible";

}

function reset(){

    playerScore = 0;
    computerScore = 0;
    resultContainer.replaceChildren();
    scoreContainer.textContent = "";
    winnerContainer.textContent = "";
    playAgainButton.disabled = true;
    playButtons.forEach(button => button.disabled = false);
    winnerContainer.style.visibility = "hidden";
    scoreContainer.style.visibility = "hidden";

}