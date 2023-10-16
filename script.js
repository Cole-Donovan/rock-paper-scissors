// global win counter variable
var playerCount = 0;
var computerCount = 0;

document.getElementById("player-score").innerHTML = playerCount;
document.getElementById("computer-score").innerHTML = computerCount;
document.getElementById("message").innerHTML = "Click on one of the buttons below to begin!";

const victory = document.querySelector('#victory');

const content = document.createElement('div');
content.classList.add('content');

// returns rock, paper, or scissors
function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3) + 1);

    if(randomNum == 1) {
        return "rock";
    }
    else if(randomNum == 2) {
        return "paper";
    }
    else if(randomNum == 3) {
        return "scissors";
    }
}

// plays a round
function playRound(playerSelection, computerSelection) {
    // if tie
    if(playerSelection == computerSelection)
    {
        if(playerSelection == "rock")
        {
            document.getElementById("message").innerHTML = "It's a draw! Rock ties with Rock.";
        }
        if(playerSelection == "paper")
        {
            document.getElementById("message").innerHTML = "It's a draw! Paper ties with Paper.";
        }
        if(playerSelection == "scissors")
        {
            document.getElementById("message").innerHTML = "It's a draw! Scissors ties with Scissors.";
        }
    }
    //if player lost
    else if(playerSelection == "rock" && computerSelection == "paper") {
        computerCount++;
        document.getElementById("message").innerHTML = "You lose! Paper beats Rock.";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerCount++;
        document.getElementById("message").innerHTML = "You lose! Scissors beats Paper.";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerCount++;
        document.getElementById("message").innerHTML = "You lose! Rock beats Scissors.";
    }//if player won
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        playerCount++;
        document.getElementById("message").innerHTML = "You win! Rock beats Scissors.";
    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        document.getElementById("message").innerHTML = "You win! Paper beats Rock.";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        playerCount++;
        document.getElementById("message").innerHTML = "You win! Scissors beats Paper.";
    }
}

function game() {
    if(playerCount < 5 && computerCount < 5)
    {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerCount, computerCount);

        document.getElementById("player-score").innerHTML = playerCount;
        document.getElementById("computer-score").innerHTML = computerCount;

        // prints overall winner
        if(playerCount == 5) {
            console.log("You won five rounds!");
            content.textContent = 'You won five rounds first! Reload to try again.';
            victory.appendChild(content);
        }
        else if(computerCount == 5) {
            console.log("The computer won five rounds!");
            content.textContent = 'The computer won five rounds first! Reload to try again.';
            victory.appendChild(content);
        }
    }
}

function rockFunction() {
    playerSelection = "rock";
    game();
}

function paperFunction() {
    playerSelection = "paper";
    game();
}

function scissorsFunction() {
    playerSelection = "scissors";
    game();
}
