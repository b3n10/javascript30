"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var endpoint = "cities.json";
var cities = [];

var p = fetch(endpoint).then(function (blob) {
	return blob.json();
}).then(function (data) {
	return cities.push.apply(cities, _toConsumableArray(data));
});

function findPlace(searchPlace, cities) {
	return cities.filter(function (place) {
		var regex = new RegExp(searchPlace, 'gi'); //g = global, i = insensitive(upper or lowercase)
		return place.city.match(regex) || place.state.match(regex);
	});
}

function displayMatches() {
	var _this = this;

	var counter = 0;
	result.innerHTML = "0";

	if (this.value) {
		var matchPlace = findPlace(this.value, cities);
		var li = matchPlace.map(function (place) {
			counter++;
			result.innerHTML = counter;

			var regex = new RegExp(_this.value, 'gi');
			var cityName = place.city.replace(regex, "<span class=\"hl\">" + _this.value + "</span>");
			var stateName = place.state.replace(regex, "<span class=\"hl\">" + _this.value + "</span>");
			return "\n\t\t\t\t<li>\n\t\t\t\t<span>" + cityName + ", " + stateName + "</span>\n\t\t\t\t<span>" + place.population + "</span>\n\t\t\t\t</li>\n\t\t\t\t";
		}).join(''); //without join lists will show comma in between them
		suggestions.innerHTML = li; //add it to ul
	} else {
		suggestions.innerHTML = "\n\t\t\t\t<li>Filter by city</li>\n\t\t\t\t<li>or a state</li>\n\t\t\t";
	}
}

var searchInput = document.querySelector(".search");
var suggestions = document.querySelector(".suggestions");
var result = document.querySelector(".result");

searchInput.addEventListener("keyup", displayMatches);
searchInput.addEventListener("change", displayMatches);