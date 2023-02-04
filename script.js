const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const INVALID_INPUT = -1;

const COMPUTER_WIN = 0;
const PLAYER_WIN = 1;

let playerScore;
let computerScore;

function getComputerChoice(){

    return Math.floor(Math.random()*3);

}
function getPlayerChoice(){

    let playerChoice = prompt("What is your choice? (type: rock, paper or scissors)");
    
    if(playerChoice){
        playerChoice = playerChoice.toLowerCase();
    }else{
        return INVALID_INPUT;
    }

    if(playerChoice=="rock"){
        return ROCK;
    }else if(playerChoice=="paper"){
        return PAPER;
    }else if(playerChoice=="scissors"){
        return SCISSORS;
    }else{
        return INVALID_INPUT;
    }

}
function playRound(playerChoice,computerChoice){

    if(playerChoice==computerChoice){
        console.log("%cIt's a tie!","color: goldenrod");
    }else if(playerChoice==ROCK){
        if(computerChoice==PAPER){
            console.log("%cYou Lose! Paper beats Rock.","color: red");
            chooseWinner(COMPUTER_WIN);
        }else{
            console.log("%cYou Win! Rock beats Scissors.","color: green");
            chooseWinner(PLAYER_WIN);
        }
    }else if(playerChoice==PAPER){
        if(computerChoice==ROCK){
            console.log("%cYou Win! Paper beats Rock.","color: green");
            chooseWinner(PLAYER_WIN);
        }else{
            console.log("%cYou Lose! Scissors beats Paper.","color: red");
            chooseWinner(COMPUTER_WIN);
        }
    }else if(playerChoice==SCISSORS){
        if(computerChoice==ROCK){
            console.log("%cYou Lose! Rock beats Scissors.","color: red");
            chooseWinner(COMPUTER_WIN);
        }else{
            console.log("%cYou Win! Scissors beats Paper.","color: green");
            chooseWinner(PLAYER_WIN);
        }
    }else{
        console.log("Invalid input!");
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