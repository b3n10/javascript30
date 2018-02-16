const addItems = document.querySelector(".add-items");
const plates = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
	e.preventDefault();// prevent refresh

	const text = this.querySelector("[name=item]").value;
	const item = {
		text,
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

function populateList(plates = [], plateList) {
	plateList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
			<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
			<label for="item${i}">${plate.text}</label>
			</li>
			`;
	}).join("");
}

function toggleDone(e) {
	if (!e.target.matches("input")) return; // stop function if not an input
	const index = e.target.dataset.index; // get the data-index of clicked checkbox
	items[index].done = !items[index].done;
	localStorage.setItem("items", JSON.stringify(items));
	console.log(localStorage.getItem("items"));
}

addItems.addEventListener("submit", addItem);
plates.addEventListener("click", toggleDone);


// populate list items on page load
populateList(items, plates);
