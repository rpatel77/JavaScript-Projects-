let computerScore = 0; 
let humanScore = 0;


function getComputerChoice() {
	let x;
	do {
		x = Math.floor((Math.random() * 10) + 1); 
	} 
	while (x != 0 && x != 1 && x != 2);

	if (x == 0) {
		x = "rock";
	} else if (x == 1) {
		x = "paper";

	} else if (x == 2) {
		x = "scissors";
	}
	return x;
}

function getHumanChoice() {
	let valid = false; 
	let input = (prompt("Rock Paper Scissors: "));
	input = input.toLowerCase();
	while (!valid) {
		if (input == "rock" || input == "paper" || input == "scissors") {
			valid = true;
			return input;
		}
		else {
			alert("enter valid input");
			input = (prompt("Rock Paper Scissors: "));
			input = input.toLowerCase();
		}
	}
}

function playRound(humanChoice, computerChoice) {
	switch (humanChoice) {
		case "rock":
			if (computerChoice == "rock") {
				console.log("DRAW! Rock vs Rock");
			} else if (computerChoice == "paper") {
				console.log("YOU LOSE! Paper beats Rock");
				computerScore++; 
			} else if (computerChoice == "scissors") {
				console.log("YOU WIN! Rock beats Scissors");
				humanScore++;
			}
			break;

		case "paper":
			if (computerChoice == "rock") {
				console.log("YOU WIN! Paper beats Rock");
				humanScore++;
			} else if (computerChoice == "paper") {
				console.log("DRAW! Paper vs Paper");
			} else if (computerChoice == "scissors") {
				console.log("YOU LOSE! Scissors beats Paper");
				computerScore++; 
			}
			break;
		
		case "scissors":
			if (computerChoice == "rock") {
				console.log("YOU LOSE! Rock beats Scissors");
				computerScore++; 
			} else if (computerChoice == "paper") {
				console.log("YOU WIN! Scissors beats Rock");
				humanScore++;
			} else if (computerChoice == "scissors") {
				console.log("DRAW! Scissors vs Scissors");
			}
			break;
	
	}
}

function gameEnd() {
	if (humanScore > computerScore) {
		console.log("YOU WIN!")
	} else if (humanScore == computerScore) {
		console.log("DRAW!")
	} else {
		console.log("YOU LOSE!")
	}
}




for (let i = 0; i < 5; i++) {
	const computerChoice = getComputerChoice();
	console.log("Computer choice: ", computerChoice);
	const humanChoice = getHumanChoice();
	console.log("Human Choice: ", humanChoice);
	playRound(humanChoice, computerChoice);
	console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
}

gameEnd();



