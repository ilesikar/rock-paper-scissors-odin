function computerPlay () {
    const choice = Math.floor(Math.random() * 3);
    return choice == 0 ? "Rock"
    : choice == 1 ? "Paper"
    : "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        return computerSelection == "Rock" ? "tie! rock v rock"
        : computerSelection == "Paper" ? "computer wins! rock loses to scissors"
        : "you win! rock beats scissors"
    } else if (playerSelection == "paper") {
        return computerSelection == "Rock" ? "you win! paper beats rock"
        : computerSelection == "Paper"? "tie! paper v paper"
        : "computer wins! paper loses to scissors";
    } else if (playerSelection == "scissors") {
        return computerSelection == "Rock" ? "you lose! scissors lose to rock!"
        : computerSelection == "Paper" ? "you win! scissors beat paper!"
        : "tie! scissors v scissors";
    } else return `${playerSelection} is not a valid input`;
}

function game() {
    for (let x=0; x<5; x++) {
        const playerSelection = window.prompt("Enter selection");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
