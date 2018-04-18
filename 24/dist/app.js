"use strict";

var nav = document.querySelector("#main");
var topNav = nav.offsetTop;

window.addEventListener("scroll", function () {
	// if scrolling gets to top of nav
	if (window.scrollY >= topNav) {
		// add padding top to body the size of nav, because nav will float over the body
		document.body.style.paddingTop = nav.offsetHeight + "px";
		document.body.classList.add("fixed-nav");
	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove("fixed-nav");
	}
});