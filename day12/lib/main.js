"use strict";

var pressed = [];
var secretCode = "hek0424!hek";

window.addEventListener("keyup", function (e) {
	if (e.key == "Alt" || e.key == "Shift" || e.key == "Meta" || e.key == "Control" || e.key == "Tab" || e.key == " ") {
		return;
	} else {
		pressed.push(e.key);
		pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
		if (pressed.join("").includes(secretCode)) {
			console.log("WiFi password is " + pressed.join(""));
		}
	}
});