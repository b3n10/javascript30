const endpoint = "cities.json";
const cities = [];

const p = fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function findPlace(searchPlace, cities) {
	return cities.filter(place => {
		const regex = new RegExp(searchPlace, 'gi');//g = global, i = insensitive(upper or lowercase)
		return place.city.match(regex) || place.state.match(regex);
	});
}

function displayMatches() {
	const matchPlace = findPlace(this.value, cities);
	const li = matchPlace.map(place => {
		const regex = new RegExp(this.value, 'gi');
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
		return `
			<li>
				<span>${cityName}, ${stateName}</span>
				<span>${place.population}</span>
			</li>
			`;
	}).join('');//without join lists will show comma in between them


	suggestions.innerHTML = li;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const result = document.querySelector(".result");

searchInput.addEventListener("keyup", displayMatches);
searchInput.addEventListener("change", displayMatches);
