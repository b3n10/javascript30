"use strict";

var checkbox = document.querySelectorAll(".inbox input[type='checkbox']");

var lastChecked = void 0;
var inBetween = false;

function isChecked(e) {
	var _this = this;

	if (e.shiftKey && this.checked) {
		//holding shift key and current selected checkbox is checked
		checkbox.forEach(function (cb) {
			if (cb === _this || cb === lastChecked) {
				//if the first checkbox or the last checkbox is selected
				inBetween = !inBetween;
			}
			if (inBetween) {
				//if it's in between the first and last selected checkbox, then check it
				cb.checked = true;
			}
		});
	}

	lastChecked = this; //currently selected checkbox
}

checkbox.forEach(function (cb) {
	return cb.addEventListener("click", isChecked);
});