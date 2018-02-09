'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var inventors = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, { first: 'Hanna', last: 'HammarstrÃ¶m', year: 1829, passed: 1909 }];

//get people who were born in 1500s using filter
var fifteen = inventors.filter(function (inventor) {
	return inventor.year >= 1500 && inventor.year < 1600;
});
//console.log(fifteen);

//array of people's first and last name using map
var fullname = inventors.map(function (inventor) {
	return inventor.first + ' ' + inventor.last;
});
//console.log(fullname);

//sort by birthdate, oldest to youngest
var birthdate = inventors.sort(function (a, b) {
	return a.year > b.year ? 1 : -1;
});
//console.log(birthdate);

//reduce - how many years did all inventors live?
var totalYears = inventors.reduce(function (total, inventor) {
	return total + (inventor.passed - inventor.year);
}, 0);
//console.log(totalYears);

//sort inventors by years lived
var oldest = inventors.sort(function (a, b) {
	return a.passed - a.year > b.passed - b.year ? -1 : 1;
});
//console.log(oldest);

//create list of Boulevards in Paris that contain 'de' anywhere in the name
//from this page: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//answer:
//const boulevards = Array.from(document.querySelectorAll('.mw-category li'));
//boulevards.map( c => c.innerText ).filter( d => d.includes('de') );

//sort people alphabetically by last name
var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

var alpha = people.sort(function (currentName, nextName) {
	var _currentName$split = currentName.split(", "),
	    _currentName$split2 = _slicedToArray(_currentName$split, 2),
	    lastNameA = _currentName$split2[0],
	    firstNameA = _currentName$split2[1];

	var _nextName$split = nextName.split(", "),
	    _nextName$split2 = _slicedToArray(_nextName$split, 2),
	    lastNameB = _nextName$split2[0],
	    firstNameB = _nextName$split2[1];

	return lastNameA > lastNameB ? 1 : -1;
});
//console.log(alpha);

//Sum up instances of each of these
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

var transpo = data.reduce(function (obj, item) {
	if (!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});

console.log(transpo);