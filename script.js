// M 

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    let choice = choices[Math.floor(Math.random() * 3)];
    console.log("Computer choice: " + choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Game logic 

    // paper beats rock
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log("You win! Paper beats Rock.")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        console.log("You lose! Paper beats Rock.")
    } else if (humanChoice === "rock" && computerChoice === "scissors") { // rock beats scissors 
        humanScore += 1;
        console.log("You win! Rock beats Scissors.")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1; 
        console.log("You lose! Rock beats Scissors.")
    } else if (humanChoice === "scissors" && computerChoice === "paper") { // scissors beats paper
        humanScore += 1;
        console.log("You win! Scissors beats Paper.")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        console.log("You lose. Scissors beats Paper.")
    } else if (humanChoice === "rock" && computerChoice === "rock") { // else tie and go again
        console.log("Tie! Go again!")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tie! Go again!")
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Tie! Go again!")
    }
}

function playGame() {
    let totalRounds = 0;

    // If total rounds are less than 5 end game and decide winner
    // while(totalRounds < 5) {
        
    //     // Always get a fresh choice from both players.
    //     let humanChoice = getHumanChoice().toLowerCase();
    //     let computerChoice = getComputerChoice();

    //     playRound(humanChoice, computerChoice);

    //     totalRounds += 1;
    // }

    // game choices to play round
    let computerChoice = '';
    let humanChoice = '';

    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const btnArr = [rockBtn, paperBtn, scissorsBtn];

    rockBtn.addEventListener('click', (event) => {
        humanChoice = event.target.id;
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    paperBtn.addEventListener('click', (event) => {
        humanChoice = event.target.id;
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    scissorsBtn.addEventListener('click', (event) => {

    });

    btnArr.forEach(element => {
        element.addEventListener('click', event => {
            humanChoice = event.target.id; // get clicked btn id
            computerChoice = getComputerChoice(); // get fresh computer choice
            playRound(humanChoice, computerChoice); // run one round
        });
    });

    
    // Declare winner to screen
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("You lose. Better luck next time!");
    } else {
        console.log("Tie, time to play again for tiebreaker!");
    }
}

playGame();