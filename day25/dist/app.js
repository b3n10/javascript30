"use strict";

var divs = document.querySelectorAll("div");

divs.forEach(function (div) {
	return div.addEventListener("click", function (e) {
		console.log(this.classList.value);
		e.stopPropagation(); // stop bubbling
	}, {
		capture: true, // true meas opposite direction of bubbling (bubbling is from root element upward)
		once: true // same as removeEventListener after 1st click
	});
});