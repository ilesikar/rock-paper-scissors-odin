function computerPlay () {
    const choice = Math.floor(Math.random() * 3);
    return choice == 0 ? "Rock"
    : choice == 1 ? "Paper"
    : "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        return computerSelection == "Rock" ? "tie! rock vs rock"
        : computerSelection == "Paper" ? "computer wins! rock loses to scissors"
        : "you win! rock beats scissors"
    } else if (playerSelection == "paper") {
        return computerSelection == "Rock" ? "you win! paper beats rock"
        : computerSelection == "Paper"? "tie! paper vs paper"
        : "computer wins! paper loses to scissors";
    } else if (playerSelection == "scissors") {
        return computerSelection == "Rock" ? "computer wins! scissors lose to rock!"
        : computerSelection == "Paper" ? "you win! scissors beat paper!"
        : "tie! scissors vs scissors";
    } else return `"${playerSelection}" is not a valid input`;
}

function game() {
    for (let x=0; x<5; x++) {
        const playerSelection = window.prompt("Enter your selection:");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function ready(callback){
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function(){
    game();
});