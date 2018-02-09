"use strict";

window.addEventListener("keydown", function (event) {
	var audio = document.querySelector("audio[data-key=\"" + event.keyCode + "\"]"); //select audio element with corresponding keyCode
	var key = document.querySelector(".key[data-key=\"" + event.keyCode + "\"]"); //select div element with corresponding keyCode

	if (!audio) return; //stop function if no audio element for keyCode

	//play audio clip and add animation to div element
	audio.currentTime = 0; //rewind audio on every keydown
	audio.play();
	key.classList.add("playing");
});

function removeTransform(event) {
	if (event.propertyName != "transform") {
		return; //do nothing if not transform event
	}
	this.classList.remove("playing");
}

var keys = document.querySelectorAll(".key"); // Node (array) of all key
keys.forEach(function (key) {
	return key.addEventListener("transitionend", removeTransform);
});