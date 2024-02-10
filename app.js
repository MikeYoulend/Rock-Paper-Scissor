const computerChoiceDisplay = document.getElementById("computer-choice"); //Prendo dal documento lo span con questo id
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;

possibleChoices.forEach(
	(
		possibleChoice //Stiamo iterando per ogni elemento di possibleChoices
	) =>
		possibleChoice.addEventListener("click", (e) => {
			//ad ogni elemento gli passiamo un e(evento) che al click farà succedere qualcosa

			userChoice = e.target.id; //restituisce l'id dell'elemento HTML che ha scatenato l'evento
			userChoiceDisplay.innerHTML = userChoice; //ci mostra a schermo userChoice
		})
);
