"use strict";

var inputs = document.querySelectorAll("input");

function imgUpdate() {
	var suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty("--" + this.name, this.value + suffix);
}

inputs.forEach(function (input) {
	return input.addEventListener("change", imgUpdate);
});
inputs.forEach(function (input) {
	return input.addEventListener("mousemove", imgUpdate);
});