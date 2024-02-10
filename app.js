const computerChoiceDisplay = document.getElementById("computer-choice"); //Prendo dal documento lo span con questo id
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button"); //Prende letteralmente tutti i button

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(
	(
		possibleChoice //Stiamo iterando per ogni elemento di possibleChoices
	) =>
		possibleChoice.addEventListener("click", (e) => {
			//ad ogni elemento gli passiamo un e(evento) che al click farà succedere qualcosa

			userChoice = e.target.id; //restituisce l'id dell'elemento HTML che ha scatenato l'evento
			userChoiceDisplay.innerHTML = userChoice; //ci mostra a schermo userChoice
			generateComputerChoice();
			getResult();
		})
);

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; //mi da un nemero random per la lungezza di possibleChoices quindi 3, +1 perchè in programmazione si parte da 0 a contare

	//Ogni risultato di randomNumber sarà uguale ad una figura
	if (randomNumber === 1) {
		computerChoice = "rock";
	}
	if (randomNumber === 2) {
		computerChoice = "scissors";
	}
	if (randomNumber === 3) {
		computerChoice = "paper";
	}

	computerChoiceDisplay.innerHTML = computerChoice; //mostra in ComputerChoiceDisplay il risultato
}

function getResult() {
	if (computerChoice === userChoice) {
		result = "its a draw";
	}
	if (computerChoice === "rock" && userChoice === "paper") {
		result = "you win!!!";
	}
	if (computerChoice === "rock" && userChoice === "scissors") {
		result = "you lose!!!";
	}
	if (computerChoice === "paper" && userChoice === "scissors") {
		result = "you win!!!";
	}
	if (computerChoice === "paper" && userChoice === "rock") {
		result = "you lose!!!";
	}
	if (computerChoice === "scissors" && userChoice === "rock") {
		result = "you win!!!";
	}
	if (computerChoice === "scissors" && userChoice === "paper") {
		result = "you lose!!!";
	}

	resultDisplay.innerHTML = result;
}
