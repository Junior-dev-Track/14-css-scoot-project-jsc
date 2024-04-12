function hamburgerMenu() {
	const hamburger = document.getElementById("hamburger");
	const nav = document.getElementById("nav");
	const body = document.body;
	const main = document.querySelector("main");

	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("hamburger-active");
		nav.classList.toggle("nav-active");
		body.classList.toggle("no-scroll");
		main.classList.toggle("filter");
	});
}

hamburgerMenu();
