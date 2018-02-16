"use strict";

var addItems = document.querySelector(".add-items");
var plates = document.querySelector(".plates");
var items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
	e.preventDefault(); // prevent refresh

	var text = this.querySelector("[name=item]").value;
	var item = {
		text: text,
		done: false
	};

	items.push(item);

	// create list item from input
	// args: array, HTMLlist
	populateList(items, plates);

	// save to localStorage
	// args: keyName, value
	localStorage.setItem("items", JSON.stringify(items));

	this.reset();
}

function populateList() {
	var plates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var plateList = arguments[1];

	plateList.innerHTML = plates.map(function (plate, i) {
		return "\n\t\t\t<li>\n\t\t\t<input type=\"checkbox\" data-index=" + i + " id=\"item" + i + "\" " + (plate.done ? "checked" : "") + " />\n\t\t\t<label for=\"item" + i + "\">" + plate.text + "</label>\n\t\t\t</li>\n\t\t\t";
	}).join("");
}

function toggleDone(e) {
	if (!e.target.matches("input")) return; // stop function if not an input
	var index = e.target.dataset.index; // get the data-index of clicked checkbox
	items[index].done = !items[index].done;
	localStorage.setItem("items", JSON.stringify(items));
	console.log(localStorage.getItem("items"));
}

addItems.addEventListener("submit", addItem);
plates.addEventListener("click", toggleDone);

// populate list items on page load
populateList(items, plates);