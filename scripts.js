let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    const choice = Math.floor(Math.random() * 3);
    return choice == 0 ? "Rock"
    : choice == 1 ? "Paper"
    : "Scissors";
}

function gameOver (results, playerElement, computerElement) {
    if (playerScore === 5) {
        window.alert(`You won! Score: ${playerScore} to ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
        results.innerHTML = "";
        playerElement.innerHTML = "<p>Player: 0</p>";
        computerElement.innerHTML = "<p>Computer: 0</p>";
    } else if (computerScore === 5) {
        window.alert(`You lost! Score: ${playerScore} to ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
        results.innerHTML = "";
        playerElement.innerHTML = "<p>Player: 0</p>";
        computerElement.innerHTML = "<p>Computer: 0</p>";
    }
}

function incrementScore (winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner = 'computer') {
        computerScore++;
    }
}

function choseRock (computerSelection) {
    if (computerSelection == 'Rock') {
        return ('Tie: Rock vs Rock.');
    } else if (computerSelection == 'Paper') {
        incrementScore('computer');
        return ('You Lose: Paper smothers Rock.');
    } else if (computerSelection == 'Scissors') {
        incrementScore('player');
        return ('You Win!: Rock smashes Scissors!');
    }
}

function chosePaper (computerSelection) {
    if (computerSelection == 'Rock') {
        incrementScore('player')
        return ('You Win!: Paper smothers Rock!');
    } else if (computerSelection == 'Paper') {
        return ('Tie: Paper vs Paper.');
    } else if (computerSelection == 'Scissors') {
        incrementScore('computer');
        return ('You Lose: Scissors cut Paper.');
    }
}

function choseScissors (computerSelection) {
    if (computerSelection == 'Rock') {
        incrementScore('computer')
        return ('You Lose: Rock smashes Scissors');
    } else if (computerSelection == 'Paper') {
        incrementScore('player');
        return ('You Win!: Scissors cut Paper.');
    } else if (computerSelection == 'Scissors') {
        return ('Tie: Scissors vs Scissors.');
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        return choseRock(computerSelection);
    } else if (playerSelection == "paper") {
        return chosePaper(computerSelection);
    } else if (playerSelection == "scissors") {
        return choseScissors(computerSelection);
    } else return `"${playerSelection}" is not a valid input`;
}

function game() {
    for (let x=0; x<5; x++) {
        const playerSelection = window.prompt("Enter your selection:");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function handleClicked(e) {
    const result = playRound(e.target.id, computerPlay());
    const results = document.querySelector(".results");
    const playerElement = document.querySelector("#player-score");
    playerElement.innerHTML = `<p>Player: ${playerScore}</p>`;
    const computerElement = document.querySelector("#computer-score");
    computerElement.innerHTML = `<p>Computer: ${computerScore}</p>`;
    const newElement = document.createElement("p");
    newElement.innerHTML = `<p>${result}</p>`;
    results.appendChild(newElement);
    gameOver(results, playerElement, computerElement);
}

function ready(callback){
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function(){
    const buttons = document.querySelectorAll('button');
    for (button of buttons) {
        button.addEventListener('click', e => {
            handleClicked(e);
        })
    }
    
});