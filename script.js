// deno-lint-ignore-file
//starts the game
game();

function computerPlay() {
    let random = Math.floor(Math.random() * Math.floor(3));
    switch (random) {
        case 0:
            return "scissor";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "rock";
            break;
    }
}

function playerSelection() {
    let input = window.prompt("Scissor, Paper, or Rock");
    input = input.toLowerCase()
    if (input == "scissor" || input == "paper" || input == "rock") {
        return input
    } else {
        playerSelection();
    }
}

function game() {
    let score = 0;
    let counter = 0;
    let win;

    function playRound(playerSelection, computerSelection) {
        //if it is tie
        if (playerSelection == computerSelection) {
            win = 0;
            return `Tie, computer have chose ${computerSelection}`;
        }

        //if the Player chooses Rock and no tie
        else if (playerSelection == "rock" && computerSelection == "scissor") {
            win = 1;
            return "You just Won! Rock beats Scissor";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            win = 0;
            return "You just Lost! Paper beats Rock";
        }

        //if the Player chooses Scissor and no tie
        else if (playerSelection == "scissor" && computerSelection == "rock") {
            win = 0;
            return "You just Lost! Rock beats Scissor";
        } else if (playerSelection == "scissor" && computerSelection == "paper") {
            win = 1;
            return "You Win! Scissor beats Paper";
        }

        //if the Player chooses Paper and no tie
        else if (playerSelection == "paper" && computerSelection == "rock") {
            win = 1;
            return "You just Won! Paper beats Rock";
        } else if (playerSelection == "paper" && computerSelection == "scissor") {
            win = 0;
            return "You just Lost! Scissor beats Paper";
        } else {
            console.log("Please enter valid data");
            playRound(playerSelection(), computerSelection());
        }

    }

    while (true) {
        let oneRound = playRound(playerSelection(), computerPlay())
        console.log(oneRound);
        if (win == 1) {
            score = score + 1;
        }
        counter++;
        if (counter > 5) {
            break;
        }
    }
    console.log(`You scored ${score} points.`);
}