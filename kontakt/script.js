function FormValidation() {
	const Document = document.forms["MyForm"];
	const Name = document.forms["MyForm"]["name"].value;
	const Email = document.forms["MyForm"]["email"].value;
	const Message = document.forms["MyForm"]["message"].value;
	const FormSpreeKey = "https://formspree.io/f/xblrjkbr";
	let form = document.getElementById("MyForm");

	const isValidEmail = (Email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(Email).toLowerCase());
	};

	const Error = [
		document.getElementById("error-message-name"),
		document.getElementById("error-message-email"),
		document.getElementById("error-message-message"),
	];
	const ErrorFeatures = [
		document.getElementById("name"),
		document.getElementById("email"),
		document.getElementById("message"),
	];

	ErrorFeatures.forEach((field, index) => {
		field.addEventListener("input", () => {
			Error[index].innerHTML = "";
			field.classList.remove("error-border");
		});
	});

	if (Name == "") {
		Error[0].innerHTML =
			"<p class=error-message >Bitte gebe einen Namen ein</p>";
		ErrorFeatures[0].classList.add("error-border");
		return false;
	} else if (Email == "") {
		Error[1].innerHTML = "<p class=error-message >Bitte Gebe Eine Email An</p>";
		ErrorFeatures[1].classList.add("error-border");
		return false;
	} else if (!isValidEmail(Email)) {
		Error[1].innerHTML =
			"<p class=error-message >Bitte Gebe Eine Gültiege Email an Email An</p>";
		ErrorFeatures[1].classList.add("error-border");
		return false;
	} else if (Message == "") {
		Error[2].innerHTML =
			"<p class=error-message >Bitte Füge Noch eine nachricht hinzu</p>";
		ErrorFeatures[2].classList.add("error-border");
		return false;
	} else {
		form.action = FormSpreeKey;
		form.method = "POST";
	}
}
