"use strict";

//NOTE:
//this exercise is not a good solution to get to the pixel level of an image being scrolled into view
//the problem is that all images given by Wes Bos are all using 400px height, so the pixel level (slideInAt) is the same for all
//if an image is much bigger/smaller, for example 800px, this will not work properly

function debounce(func) {
	var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	var timeout;
	return function () {
		var context = this,
		    args = arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
	sliderImages.forEach(function (sliderImg) {
		//half way through the image
		var slideInAt = window.scrollY + window.innerHeight - sliderImg.height;
		//bottom of image
		var imageBottom = sliderImg.offsetTop + sliderImg.height;

		var isHalfShown = slideInAt > sliderImg.offsetTop;
		var isNotScrolledPast = window.scrollY < imageBottom;

		if (isHalfShown && isNotScrolledPast) {
			sliderImg.classList.add("active");
		} else {
			sliderImg.classList.remove("active");
		}
	});
}

window.addEventListener("scroll", debounce(checkSlide));