function FormValidation() {
	const Name = document.forms["MyForm"]["name"].value;
	const Email = document.forms["MyForm"]["email"].value;
	const Message = document.forms["MyForm"]["message"].value;

	if (Name == "") {
		alert("Name Muss Ausgefült werden");
		return false;
	} else if (Email == "") {
		alert("Email Muss Ausgefült werden");
		return false;
	} else if (Message == "") {
		alert("Es fehlt Noch eine nachricht");
		return false;
	}
}

// TODO:Form Valiedierung In html anzeigen
