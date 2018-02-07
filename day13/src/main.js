//NOTE:
//this exercise is not a good solution to get to the pixel level of an image being scrolled into view
//the problem is that all images given by Wes Bos are all using 400px height, so the pixel level (slideInAt) is the same for all
//if an image is much bigger/smaller, for example 800px, this will not work properly

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
	var callNow = immediate && !timeout;
	clearTimeout(timeout);
	timeout = setTimeout(later, wait);
	if (callNow) func.apply(context, args);
	};
};

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
	sliderImages.forEach(sliderImg => {
		//half way through the image
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImg.height;
		//bottom of image
		const imageBottom = sliderImg.offsetTop + sliderImg.height;

		const isHalfShown = slideInAt > sliderImg.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;

		if (isHalfShown && isNotScrolledPast) {
			sliderImg.classList.add("active");
		} else {
			sliderImg.classList.remove("active");
		}

	});
}

window.addEventListener("scroll", debounce(checkSlide));
