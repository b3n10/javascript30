window.addEventListener("keydown", function(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);//select audio element with corresponding keyCode
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);//select div element with corresponding keyCode

	if (!audio) return;//stop function if no audio element for keyCode

	//play audio clip and add animation to div element
	audio.currentTime = 0;//rewind audio on every keydown
	audio.play();
	key.classList.add('playing');
});
