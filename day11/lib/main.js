"use strict";

var player = document.querySelector(".player");
var video = player.querySelector(".viewer");
var progress = player.querySelector(".progress");
var progressBar = player.querySelector(".progress__filled");
var toggle = player.querySelector(".toggle");
var skipButtons = player.querySelectorAll("[data-skip]");
var ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
	var method = video.paused ? "play" : "pause";
	video[method]();
}

function updateButton() {
	toggle.textContent = this.paused ? "▶" : "▮▮";
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function hanleProgressBar() {
	var percent = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = percent + "%";
}

function scrub(e) {
	var scrubTime = e.offsetX / progress.offsetWidth * video.duration;
	video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", hanleProgressBar);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(function (button) {
	return button.addEventListener("click", skip);
});

ranges.forEach(function (button) {
	return button.addEventListener("change", handleRangeUpdate);
});
ranges.forEach(function (button) {
	return button.addEventListener("mousemove", handleRangeUpdate);
});

progress.addEventListener("click", scrub);

var mousedown = false;
progress.addEventListener("mousemove", function () {
	return mousedown && scrub(e);
});
progress.addEventListener("mousedown", function (mousedown) {
	return mousedown = true;
});
progress.addEventListener("mouseup", function (mousedown) {
	return mousedown = false;
});