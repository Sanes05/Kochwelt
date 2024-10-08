// Burger Menu logik

function ToggleMenu() {
	const burgerMenuIcon = document.getElementById("burger-menu-icon");
	const burgerMenu = document.getElementById("burger-menu");
	const overlay = document.getElementById("overlay");

	// Öffnen und Schließen des Burger-Menüs
	burgerMenu.classList.toggle("active");
	overlay.classList.toggle("active");

	// Schließen des Menüs beim Klicken auf das Overlay
	overlay.addEventListener("click", function () {
		burgerMenu.classList.remove("active");
		overlay.classList.remove("active");
	});
}
