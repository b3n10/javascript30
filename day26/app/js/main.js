const triggers = document.querySelectorAll('.mainul > li');
const background = document.querySelector('.dropdownBackground');

triggers.forEach(trigger => trigger.addEventListener('mouseover', () => {
	trigger.classList.add('trigger-enter');
	// if trigger contains trigger-enter then add trigger-enter-active
	// it will not show the content right away without rendering the box (background)
	setTimeout(() => trigger.classList.contains('trigger-enter') && trigger.classList.add('trigger-enter-active'), 150);
	background.classList.add('open');

	const dropdown = trigger.querySelector('.dropdown');
	// get dropdown's dimension (e.g. height, width)
	const dropdownCoords = dropdown.getBoundingClientRect();

	// create an obj to store dropdown's height & width
	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top,
		left: dropdownCoords.left
	};


	background.style.setProperty('height', `${coords.height}px`);
	background.style.setProperty('width', `${coords.width}px`);
	background.style.setProperty('top', `${coords.top}px`);
	background.style.setProperty('left', `${coords.left}px`);

}));

triggers.forEach(trigger => trigger.addEventListener('mouseleave', () => {
	trigger.classList.remove('trigger-enter', 'trigger-enter-active');
	background.classList.remove('open');
}));
