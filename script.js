const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const INVALID_INPUT = -1;

const COMPUTER_WIN = 0;
const PLAYER_WIN = 1;

let playerScore;
let computerScore;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click",function(){
    playRound(+this.value,getComputerChoice());
}));

const resultContainer = document.querySelector(".result");

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
            chooseWinner(COMPUTER_WIN);
        }else{
            updateResults("You Win! Rock beats Scissors.", "green");
            chooseWinner(PLAYER_WIN);
        }
    }else if(playerChoice==PAPER){
        if(computerChoice==ROCK){
            updateResults("You Win! Paper beats Rock", "green");
            chooseWinner(PLAYER_WIN);
        }else{
            updateResults("You Lose! Scissors beats Paper", "red");
            chooseWinner(COMPUTER_WIN);
        }
    }else{
        if(computerChoice==ROCK){
            updateResults("You Lose! Rock beats Scissors.", "red");
            chooseWinner(COMPUTER_WIN);
        }else{
            updateResults("You Win! Scissors beats Paper.", "green");
            chooseWinner(PLAYER_WIN);
        }
    }

}

function chooseWinner(winner){

    if(winner==COMPUTER_WIN){
        computerScore++;
    }else{
        playerScore++;
    }

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