function FormValidation() {
	const Name = document.forms["MyForm"]["name"].value;
	const Email = document.forms["MyForm"]["email"].value;
	const Message = document.forms["MyForm"]["message"].value;
	const Error = [
		document.getElementById("error-message-name"),
		document.getElementById("error-message-email"),
		document.getElementById("error-message-message"),
	];
	const ErrorChangeBorderColor = [
		document.getElementById("name"),
		document.getElementById("email"),
		document.getElementById("message"),
	];
	if (Name == "") {
		Error[0].innerHTML =
			"<p class=error-message >Bitte gebe einen Namen ein</p>";
		ErrorChangeBorderColor[0].classList.add("error-border");
		return false;
	} else if (Email == "") {
		Error[1].innerHTML = "<p class=error-message >Bitte Gebe Eine Email An</p>";
		ErrorChangeBorderColor[1].classList.add("error-border");
		return false;
	} else if (Message == "") {
		Error[2].innerHTML =
			"<p class=error-message >Bitte Füge Noch eine nachricht hinzu</p>";
		ErrorChangeBorderColor[2].classList.add("error-border");
		return false;
	}
}
