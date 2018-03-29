"use strict";

var anchors = document.querySelectorAll("a"),
    highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

anchors.forEach(function (a) {
	return a.addEventListener("mouseenter", function () {
		highlight.style.width = this.offsetWidth + 5 + "px";
		highlight.style.height = this.offsetHeight + "px";
		highlight.style.transform = "translate(" + (this.offsetLeft - 2) + "px, " + this.offsetTop + "px)";
	});
});