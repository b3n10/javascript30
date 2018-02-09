'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var people = [{ name: 'ben', year: 1988 }, { name: 'neth', year: 1968 }, { name: 'ethan', year: 2014 }, { name: 'jairah', year: 2008 }];

var comments = [{ text: 'hi, there', id: 34523 }, { text: 'hello world', id: 54633 }, { text: 'yow wazzup', id: 76344 }, { text: 'it supposed to be', id: 23122 }, { text: 'heroes of new age', id: 63849 }];

//Array.prototype.some() - at least 1 meets criteria
//example should be at least 30 yrs old

var isThirty = people.some(function (person) {
	return new Date().getFullYear() - person.year >= 30;
});
console.log({ isThirty: isThirty });

//Array.prototype.every() - all should meet criteria
var isAllThirty = people.every(function (person) {
	return new Date().getFullYear() - person.year >= 30;
});
console.log({ isAllThirty: isAllThirty });

//Array.prototype.find() - find one meeting criteria
var comment = comments.find(function (comment) {
	return comment.id === 76344;
});
console.log(comment);

//Array.prototype.findIndex() - get index of meeting criteria
var index = comments.findIndex(function (comment) {
	return comment.id === 76344;
});

var newComments = [].concat(_toConsumableArray(comments.slice(0, index)), _toConsumableArray(comments.slice(index + 1))); //use spread to distribute array slices in new array
console.log(newComments);