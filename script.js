// global win counter variable
var playerCount = 0;
var computerCount = 0;

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

function playRound(playerSelection, computerSelection) {
    let correctedPlayerSelection = playerSelection.toLowerCase();

    // if tie
    if(correctedPlayerSelection == computerSelection)
    {
        if(correctedPlayerSelection == "rock")
        {
            return "It's a draw! Rock ties with Rock.";
        }
        if(correctedPlayerSelection == "paper")
        {
            return "It's a draw! Paper ties with Paper.";
        }
        if(correctedPlayerSelection == "scissors")
        {
            return "It's a draw! Scissors ties with Scissors.";
        }
    }
    //if player lost
    else if(correctedPlayerSelection == "rock" && computerSelection == "paper") {
        computerCount++;
        return "You lose! Paper beats Rock.";
    }
    else if(correctedPlayerSelection == "paper" && computerSelection == "scissors") {
        computerCount++;
        return "You lose! Scissors beats Paper.";
    }
    else if(correctedPlayerSelection == "scissors" && computerSelection == "rock") {
        computerCount++;
        return "You lose! Rock beats Scissors.";
    }//if player won
    else if(correctedPlayerSelection == "rock" && computerSelection == "scissors") {
        playerCount++;
        return "You win! Rock beats Scissors.";
    }
    else if(correctedPlayerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        return "You win! Paper beats Rock.";
    }
    else if(correctedPlayerSelection == "scissors" && computerSelection == "paper") {
        playerCount++;
        return "You win! Scissors beats Paper.";
    }
}

function game() {
    //prompts and runs 5 games
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose rock, paper, or scissors");
        console.log(playRound(playerSelection, computerSelection));
    }

    // prints overall winner
    if(playerCount > computerCount) {
        console.log("You won the most rounds!");
    }
    else if(computerCount > playerCount) {
        console.log("The computer won the most rounds!");
    }
    else {
        console.log("Overall, you and the computer tied!")
    }
}

game();
// test via console
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
