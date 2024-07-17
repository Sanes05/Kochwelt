const errorBorder = document.getElementById("zutaten");
const error = document.getElementById("error-message");
let Ingredient = [
	document.getElementById("firtst-ingredient"),
	document.getElementById("second-ingredient"),
	document.getElementById("third-ingredient"),
	document.getElementById("fourth-ingredient"),
	document.getElementById("fifth-ingredient"),
	document.getElementById("sixth-ingredient"),
	document.getElementById("seventh-ingredient"),
	document.getElementById("eighth-ingredient"),
	document.getElementById("ninth-ingredient"),
	document.getElementById("tenth-ingredient"),
	document.getElementById("eleventh-ingredient"),
	document.getElementById("twelfth-ingredient"),
	document.getElementById("thirteenth-ingredient"),
];

function CalculatePortions(id) {
	const portionen = document.getElementById("zutaten").value;
	if (portionen <= 0) {
		ShowError("Portionen können nicht Null oder weniger sein", error, errorBorder);
	} else if (portionen > 20) {
		ShowError("Portionen können nicht über 20 sein", error, errorBorder);
	} else if (id === "Kevin") {
		CalculateIngredients((menge = [400, 100, 3, 200, 50, 1]));
	} else if (id === "Thomas") {
		CalculateIngredients((menge = [250, 1, 1, 1, 1, 100, 80, 50, 4, 50, 100, 50, 2]));
	} else if (id === "Tobias") {
		CalculateIngredients((menge = [150, 50, 100, 1, 1, 6, 5, 3]));
	} else {
		console.error("Keine ID");
	}
}

function CalculateIngredients(menge = []) {
	const portionen = document.getElementById("zutaten").value;
	const num = 4;
	HideError(error, errorBorder);
	const Menge = menge;
	for (let index = 0; index < Ingredient.length; index++) {
		if (index < Menge.length) {
			Ingredient[index].innerText = `${(Menge[index] / num) * portionen}`.replace(".", ",");
		}
	}
}

function ShowError(message, error, errorBorder) {
	error.innerText = message;
	errorBorder.classList.add("error-border");
}

function HideError(error, errorBorder) {
	error.innerText = "";
	errorBorder.classList.remove("error-border");
}
