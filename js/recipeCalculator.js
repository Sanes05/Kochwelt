function CalculatePortionsKevin() {
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

function CalculatePortionsThomas() {
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
		document.getElementById("seventh-ingredient"),
		document.getElementById("eighth-ingredient"),
		document.getElementById("ninth-ingredient"),
		document.getElementById("tenth-ingredient"),
		document.getElementById("eleventh-ingredient"),
		document.getElementById("twelfth-ingredient"),
		document.getElementById("thirteenth-ingredient"),
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
		Ingredient[0].innerText = `${(250 / num) * portionen}`.replace(".", ",");
		Ingredient[1].innerText = `${(1 / num) * portionen}`.replace(".", ",");
		Ingredient[2].innerText = `${(1 / num) * portionen}`.replace(".", ",");
		Ingredient[3].innerText = `${(1 / num) * portionen}`.replace(".", ",");
		Ingredient[4].innerText = `${(1 / num) * portionen}`.replace(".", ",");
		Ingredient[5].innerText = `${(100 / num) * portionen}`.replace(".", ",");
		Ingredient[6].innerText = `${(80 / num) * portionen}`;
		Ingredient[7].innerText = `${(50 / num) * portionen}`.replace(".", ",");
		Ingredient[8].innerText = `${(4 / num) * portionen}`;
		Ingredient[9].innerText = `${(50 / num) * portionen}`.replace(".", ",");
		Ingredient[10].innerText = `${(100 / num) * portionen}`;
		Ingredient[11].innerText = `${(50 / num) * portionen}`.replace(".", ",");
		Ingredient[12].innerText = `${(2 / num) * portionen}`.replace(".", ",");
	}
}
