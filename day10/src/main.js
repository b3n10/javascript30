const checkbox = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;
let inBetween = false;

function isChecked(e) {
	if (e.shiftKey && this.checked) {//holding shift key and current selected checkbox is checked
		checkbox.forEach(cb => {
			if (cb === this || cb === lastChecked) {//if the first checkbox or the last checkbox is selected
				inBetween = !inBetween;
			}
			if (inBetween) {//if it's in between the first and last selected checkbox, then check it
				cb.checked = true;
			}
		});
	}

	lastChecked = this;//currently selected checkbox
}

checkbox.forEach(cb => cb.addEventListener("click", isChecked));
