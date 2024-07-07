function CalculatePortions() {
	const portionen = document.getElementById("zutaten").value;
	const errorBorder = document.getElementById("zutaten");
	const error = document.getElementById("error-message");
	const num = 4;
	let Ingredient = [
		document.getElementById("firtst-ingredient"),
		document.getElementById("second-ingredient"),
		document.getElementById("third-ingredient"),
		document.getElementById("fourth-ingredient"),
		document.getElementById("fifth-ingredient"),
		document.getElementById("sixth-ingredient"),
	];

	if (portionen <= 0) {
		error.innerHTML = "Portionen können nicht Null oder wenieger sein";
		errorBorder.classList.add("error-border");
	} else if (portionen > 20) {
		error.innerHTML = "Portionen können nicht Über 20 sein";
		errorBorder.classList.add("error-border");
	} else {
		error.innerHTML = "";
		errorBorder.classList.remove("error-border");
		Ingredient[0].innerText = `${(400 / num) * portionen}`;
		Ingredient[1].innerText = `${(100 / num) * portionen}`;
		Ingredient[2].innerText = `${(3 / num) * portionen}`.replace(".", ",");
		Ingredient[3].innerText = `${(200 / num) * portionen}`;
		Ingredient[4].innerText = `${(50 / num) * portionen}`.replace(".", ",");
		Ingredient[5].innerText = `${(1 / num) * portionen}`.replace(".", ",");
	}
}
