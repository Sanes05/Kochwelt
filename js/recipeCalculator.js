function CalculatePortions(id) {
	const errorBorder = document.getElementById("zutaten");
	const error = document.getElementById("error-message");
	const portionen = document.getElementById("zutaten").value;
	if (portionen <= 0) {
		ShowError("Portionen können nicht Null oder weniger sein", error, errorBorder);
	} else if (portionen > 20) {
		ShowError("Portionen können nicht über 20 sein", error, errorBorder);
	} else if (id === "Kevin") {
		CalculateIngredients("Kevin", (menge = [400, 100, 3, 200, 50, 1]));
	} else if (id === "Thomas") {
		CalculateIngredients("Thomas", (menge = [250, 1, 1, 1, 1, 100, 80, 50, 4, 50, 100, 50, 2]));
	} else if (id === "Tobias") {
		CalculateIngredients("Tobias", (menge = [150, 50, 100, 1, 1, 6, 5, 3]));
	} else {
		console.error("Keine ID");
	}
}

function CalculateIngredients(id, menge = []) {
	const portionen = document.getElementById("zutaten").value;
	const errorBorder = document.getElementById("zutaten");
	const error = document.getElementById("error-message");
	const num = 4;
	HideError(error, errorBorder);
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

	if (id === "Kevin") {
		const Menge = menge;
		for (let index = 0; index < Ingredient.length; index++) {
			if (index < Menge.length) {
				Ingredient[index].innerText = `${(Menge[index] / num) * portionen}`.replace(".", ",");
			}
		}
	} else if (id === "Thomas") {
		const Menge = menge;
		for (let index = 0; index < Ingredient.length; index++) {
			if (index < Menge.length) {
				Ingredient[index].innerText = `${(Menge[index] / num) * portionen}`.replace(".", ",");
			}
		}
	} else if (id === "Tobias") {
		const Menge = menge;
		for (let index = 0; index < Ingredient.length; index++) {
			if (index < Menge.length) {
				Ingredient[index].innerText = `${(Menge[index] / num) * portionen}`.replace(".", ",");
			}
		}
	} else {
		console.error("Falsche oder Keine id");
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
