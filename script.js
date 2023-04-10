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
    
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
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
        result.textContent = "Wow! You beat a bot. Press Reset";
        scorePlayer.textContent = 0;
        scoreComputer.textContent = 0;
        result.style.color = "red";
    }
    else if (computerScore >= 5 && computerScore >= playerScore) {
        result.textContent = "Wow! You lost to a bot. Press Reset";
        scorePlayer.textContent = 0;
        scoreComputer.textContent = 0;
        result.style.color = "red";
    }
    return;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector('#result');
const scorePlayer = document.querySelector('#scorePlayer');
const scoreComputer = document.querySelector('#scoreComputer');
const reset = document.querySelector('#reset');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');


let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    let computer = getComputerChoice();
    playRound("rock", computer);
    toField("rock", computer);
});
paper.addEventListener('click', () => {
    let computer = getComputerChoice();
    playRound("paper", computer);
    toField("paper", computer);
});
scissor.addEventListener('click', () => {
    let computer = getComputerChoice();
    playRound("scissor", computer);
    toField("scissor", computer);
});

reset.addEventListener('click', () => {
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;
});


function toField(playerSelection, computerSelection) {
    console.log(playerSelection + " vs " + computerSelection);


    if (playerSelection == "rock") {
        playerChoice.setAttribute("src","./images/rock.png");
    }
    else if (playerSelection == "paper"){
        playerChoice.setAttribute("src","./images/paper.png");
    }
    else {
        playerChoice.setAttribute("src","./images/scissor.png");
    }
    playerChoice.style.cssText = "height: 100px;width: 100px;object-fit: contain;border: 1px solid white;border-radius: 25px;background-color: wheat;"


    
    if (computerSelection == "rock") {
        computerChoice.setAttribute("src","./images/rock.png");
    }
    else if (computerSelection == "paper"){
        computerChoice.setAttribute("src","./images/paper.png");
    }
    else {
        computerChoice.setAttribute("src","./images/scissor.png");
    }
    computerChoice.style.cssText = "height: 100px;width: 100px;object-fit: contain;border: 1px solid white;border-radius: 25px;background-color: wheat;"
}