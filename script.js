// M 

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    let choice = choices[Math.floor(Math.random() * 3)];
    // console.log("Computer choice: " + choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Game logic 

    // paper beats rock
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        // make this text below appear on screen and remove console log
        // console.log("You win! Paper beats Rock.")

        document.querySelector('#results').textContent = "You win! Paper beats Rock.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        // console.log("You lose! Paper beats Rock.")

        document.querySelector('#results').textContent = "You lose! Paper beats Rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") { // rock beats scissors 
        humanScore += 1;
        // console.log("You win! Rock beats Scissors.");

        document.querySelector('#results').textContent = "You win! Rock beats Scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1; 
        // console.log("You lose! Rock beats Scissors.")

        document.querySelector('#results').textContent = "You lose! Rock beats Scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") { // scissors beats paper
        humanScore += 1;
        // console.log("You win! Scissors beats Paper.")

        document.querySelector('#results').textContent = "You win! Scissors beats Paper.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        // console.log("You lose. Scissors beats Paper.")

        document.querySelector('#results').textContent = "You lose. Scissors beats Paper."; 
    } else if (humanChoice === "rock" && computerChoice === "rock") { // else tie and go again
        // console.log("Tie! Go again!")

        document.querySelector('#results').textContent = "Tie! Go again!"; 
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        // console.log("Tie! Go again!")
    
        document.querySelector('#results').textContent = "Tie! Go again!";
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        // console.log("Tie! Go again!")

        document.querySelector('#results').textContent = "Tie! Go again!";
    }

    document.querySelector('#humanScore').textContent = "Your score: " + humanScore;
    document.querySelector('#computerScore').textContent = "Computer Score: " + computerScore;
}

function playGame() {
    let totalRounds = 0;
    let gameOver = false;

    // game choices to play round
    let computerChoice = '';
    let humanChoice = '';

    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const btnArr = [rockBtn, paperBtn, scissorsBtn];

    btnArr.forEach(element => {
        element.addEventListener('click', event => {
            if (gameOver) { return; }

            totalRounds += 1;
            humanChoice = event.target.id; // get clicked btn id
            computerChoice = getComputerChoice(); // get fresh computer choice
            playRound(humanChoice, computerChoice); // run one round
            console.log(`total round: ${totalRounds}`);

            // Declare winner to screen
            if (totalRounds >= 5) {
                gameOver = true;

                if (humanScore > computerScore) {
                    // console.log("You are the winner!");

                    document.querySelector('#gameResults').textContent = "You are the winner!";
                } else if (humanScore < computerScore) {
                    // console.log("You lose. Better luck next time!");

                    document.querySelector('#gameResults').textContent = "You lose. Better luck next time!";
                } else {
                    // console.log("Tie, time to play again for tiebreaker!");

                    document.querySelector('#gameResults').textContent = "Tie, time to play again for tiebreaker!";
                }

                document.querySelector('#gameOver').innerHTML = 'GAME OVER. <br> If you wish to play again, click restart.';
                
               if (gameOver) { 
                    let restartBtn = document.querySelector('#restart');
                    restartBtn.style.display = 'inline-block';

                    restartBtn.addEventListener('click', () => { location.reload(); });   
                }
            }
        });
    });
}

playGame();