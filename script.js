
// plays a round of rock paper scissor

function playRound(playerSelection, computerSelection) {
    
    let player = playerSelection.toLowerCase(playerSelection)

     if (player == "rock") {
        if (computerSelection == "rock") {
            return "Tie!";
        }
        else if (computerSelection == "paper") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (player == "paper") {
        if (computerSelection == "paper") {
            return "Tie!";
        }
        else if (computerSelection == "scissor") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (player == "scissor") {
        if (computerSelection == "scissor") {
            return "Tie!";
        }
        else if (computerSelection == "rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else {
        console.log("Invalid Input");
    }
}

// get computer choice function

function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

// say winner
function winner() {
    if (playerScore > computerScore) {
        return "Final verdict: You Won!";
    }
    else if (computerScore > playerScore) {
        return "Final verdict: You Lost!";
    }
    else {
        return "Final verdict: It's a Tie...";
    }
}

// game function = plays best of 5 rounds
function game() {
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock paper or scissor? ");
        let computerSelection = getComputerChoice();
        let oneGame = playRound(playerSelection, computerSelection);

        console.log(oneGame);
        if (oneGame === "Tie!") {
            console.log("You: " + playerScore + " " + "Computer: " + computerScore);
        }
        else if (oneGame === `You win! ${playerSelection} beats ${computerSelection}`) {
            playerScore++;
            console.log("You: " + playerScore + " " + "Computer: " + computerScore);
        }
        else if (oneGame === `You lose! ${computerSelection} beats ${playerSelection}`) {
            computerScore++;
            console.log("You: " + playerScore + " " + "Computer: " + computerScore);
        }

    }
    return winner();
}

let playerScore = 0;
let computerScore = 0;
console.log(game());
