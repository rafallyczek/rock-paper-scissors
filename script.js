// 0 equals Rock
// 1 equals Paper
// 2 equals Scissors

let playerScore;
let computerScore;

function getComputerChoice(){

    return Math.floor(Math.random()*3);

}
function getPlayerChoice(){

    let playerChoice = prompt("What is your choice? (type rock, paper or scissors)");
    
    if(playerChoice){
        playerChoice = playerChoice.toLowerCase();
    }else{
        return -1;
    }

    if(playerChoice=="rock"){
        return 0;
    }else if(playerChoice=="paper"){
        return 1;
    }else{
        return 2;
    }

}
function playRound(playerChoice,computerChoice){

    if(playerChoice==computerChoice){
        console.log("%cIt's a tie!","color: goldenrod");
    }else if(playerChoice==0){
        if(computerChoice==1){
            console.log("%cYou Lose! Paper beats Rock.","color: red");
            addPointsToWinnerScore(0);
        }else{
            console.log("%cYou Win! Scissors beats Rock.","color: green");
            addPointsToWinnerScore(1);
        }
    }else if(playerChoice==1){
        if(computerChoice==0){
            console.log("%cYou Win! Paper beats Rock.","color: green");
            addPointsToWinnerScore(1);
        }else{
            console.log("%cYou Lose! Scissors beats Paper.","color: red");
            addPointsToWinnerScore(0);
        }
    }else if(playerChoice==2){
        if(computerChoice==0){
            console.log("%cYou Lose! Rock beats Scissors.","color: red");
            addPointsToWinnerScore(0);
        }else{
            console.log("%cYou Win! Scissors beats Paper.","color: green");
            addPointsToWinnerScore(1);
        }
    }else{
        console.log("Invalid input! No point's added.");
    }

}
// 0 equals computer-win
// 1 equals player-win
function addPointsToWinnerScore(winner){

    if(winner==0){
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