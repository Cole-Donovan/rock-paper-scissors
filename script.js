// returns 1, 2, or 3
function getComputerChoice() {
    return(Math.floor((Math.random() * 3) + 1));
}

const computerSelection = getComputerChoice();