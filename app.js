const computerChoiceDisplay = document.getElementById("computer-choice"); //Prendo dal documento lo span con questo id
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button"); //Prende letteralmente tutti i button

let userChoice;

possibleChoices.forEach(
	(
		possibleChoice //Stiamo iterando per ogni elemento di possibleChoices
	) =>
		possibleChoice.addEventListener("click", (e) => {
			//ad ogni elemento gli passiamo un e(evento) che al click farà succedere qualcosa

			userChoice = e.target.id; //restituisce l'id dell'elemento HTML che ha scatenato l'evento
			userChoiceDisplay.innerHTML = userChoice; //ci mostra a schermo userChoice
			generateComputerChoice();
		})
);

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; //mi da un nemero random per la lungezza di possibleChoices quindi 3, +1 perchè in programmazione si parte da 0 a contare
	console.log(randomNumber);
}
