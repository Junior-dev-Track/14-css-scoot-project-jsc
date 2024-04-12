function hamburgerMenu() {
	const hamburger = document.getElementById("hamburger");
	const nav = document.getElementById("nav");
	const body = document.body;
	const main = document.querySelector("main");
	const headerButton = document.getElementById("header-button");

	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("hamburger-active");
		nav.classList.toggle("nav-active");
		body.classList.toggle("no-scroll");
		main.classList.toggle("filter");
		headerButton.classList.toggle("header-button-active");
	});
}

hamburgerMenu();

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
	let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

	if (currentScroll > lastScrollTop) {
		// Scrolling down
		document.querySelector("header").classList.remove("sticky");
	} else {
		// Scrolling up
		document.querySelector("header").classList.add("sticky");
	}

	// Check if the user has scrolled to the top
	if (currentScroll <= 0) {
		document.querySelector("header").classList.remove("sticky");
	}

	lastScrollTop = currentScroll;
});
