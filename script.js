// plays a round of rock paper scissor
function playRound(playerSelection, computerSelection) {
    
    let player = playerSelection.toLowerCase(playerSelection);

    if (computerSelection == "rock"
    && player == "rock" || computerSelection == "paper" 
    && player == "paper" || computerSelection == "scissor"
    && player == "scissor"
    ) {
        result.textContent = "Tie!";
    }
    else if (computerSelection == "rock"
    && player == "scissor" || computerSelection == "paper" 
    && player == "rock" || computerSelection == "scissor"
    && player == "paper"
    ) {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    else {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    winner();
}

// get computer choice function
function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

function winner() {
    if (playerScore >= 5 && playerScore >= computerScore) {
        score.textContent = "Wow! You beat a bot. Press Reset";
    }
    else if (computerScore >= 5 && computerScore >= playerScore) {
        score.textContent = "Wow! You lost to a bot. Press Reset";
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const reset = document.querySelector('#reset');
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {playRound("rock", getComputerChoice())});
paper.addEventListener('click', () => {playRound("paper", getComputerChoice())});
scissor.addEventListener('click', () => {playRound("scissor", getComputerChoice())});
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
})
