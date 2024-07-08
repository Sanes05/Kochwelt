function CalculatePortions(id) {
	const errorBorder = document.getElementById("zutaten");
	const error = document.getElementById("error-message");
	const portionen = document.getElementById("zutaten").value;
	if (portionen <= 0) {
		error.innerHTML = "Portionen können nicht Null oder wenieger sein";
		errorBorder.classList.add("error-border");
	} else if (portionen > 20) {
		error.innerHTML = "Portionen können nicht Über 20 sein";
		errorBorder.classList.add("error-border");
	} else if (id === 0) {
		error.innerHTML = "";
		errorBorder.classList.remove("error-border");
		CalculatePortionsKevin();
	} else if (id === 1) {
		CalculatePortionsThomas();
	} else {
		console.log("hund");
	}
}

function CalculatePortionsKevin() {
	const errorBorder = document.getElementById("zutaten");
	const error = document.getElementById("error-message");
	const portionen = document.getElementById("zutaten").value;
	const num = 4;
	const menge = [400, 100, 3, 200, 50, 1];
	let Ingredient = [
		document.getElementById("firtst-ingredient"),
		document.getElementById("second-ingredient"),
		document.getElementById("third-ingredient"),
		document.getElementById("fourth-ingredient"),
		document.getElementById("fifth-ingredient"),
		document.getElementById("sixth-ingredient"),
	];

	error.innerHTML = "";
	errorBorder.classList.remove("error-border");
	Ingredient[0].innerText = `${(menge[0] / num) * portionen}`;
	Ingredient[1].innerText = `${(menge[1] / num) * portionen}`;
	Ingredient[2].innerText = `${(menge[2] / num) * portionen}`.replace(".", ",");
	Ingredient[3].innerText = `${(menge[3] / num) * portionen}`;
	Ingredient[4].innerText = `${(menge[4] / num) * portionen}`.replace(".", ",");
	Ingredient[5].innerText = `${(menge[5] / num) * portionen}`.replace(".", ",");
}

function CalculatePortionsThomas() {
	const portionen = document.getElementById("zutaten").value;
	const errorBorder = document.getElementById("zutaten");
	const error = document.getElementById("error-message");
	const num = 4;
	const menge = [250, 1, 100, 80, 50, 4, 2];
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

	error.innerHTML = "";
	errorBorder.classList.remove("error-border");
	Ingredient[0].innerText = `${(menge[0] / num) * portionen}`.replace(".", ",");
	Ingredient[1].innerText = `${(menge[1] / num) * portionen}`.replace(".", ",");
	Ingredient[2].innerText = `${(menge[1] / num) * portionen}`.replace(".", ",");
	Ingredient[3].innerText = `${(menge[1] / num) * portionen}`.replace(".", ",");
	Ingredient[4].innerText = `${(menge[1] / num) * portionen}`.replace(".", ",");
	Ingredient[5].innerText = `${(menge[2] / num) * portionen}`.replace(".", ",");
	Ingredient[6].innerText = `${(menge[3] / num) * portionen}`;
	Ingredient[7].innerText = `${(menge[4] / num) * portionen}`.replace(".", ",");
	Ingredient[8].innerText = `${(menge[5] / num) * portionen}`;
	Ingredient[9].innerText = `${(menge[4] / num) * portionen}`.replace(".", ",");
	Ingredient[10].innerText = `${(menge[2] / num) * portionen}`;
	Ingredient[11].innerText = `${(menge[4] / num) * portionen}`.replace(
		".",
		","
	);
	Ingredient[12].innerText = `${(menge[6] / num) * portionen}`.replace(
		".",
		","
	);
}
