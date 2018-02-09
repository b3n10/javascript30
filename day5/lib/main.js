"use strict";

var panels = document.querySelectorAll(".panel");

function toggleOpen() {
	this.classList.toggle("open");
}

function toggleActive(event) {
	if (event.propertyName.includes("flex")) {
		this.classList.toggle("open-active");
		console.log(this);
	}
}

panels.forEach(function (panel) {
	return panel.addEventListener("click", toggleOpen);
});
panels.forEach(function (panel) {
	return panel.addEventListener("transitionend", toggleActive);
});