const slider = document.getElementsByClassName('items')[0];
// add flag for mouse is clicked on item
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft; // store the initial value
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
	// if mouse is not click on item, then stop function
	if (!isDown) return;
	e.preventDefault(); // prevent select any text
	const x = e.pageX - slider.offsetLeft; // recalculate when moving
	const walk = x - startX;
	slider.scrollLeft = scrollLeft - walk;
});
