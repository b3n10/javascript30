const inputs = document.querySelectorAll("input");

function imgUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", imgUpdate));
inputs.forEach(input => input.addEventListener("mousemove", imgUpdate));
