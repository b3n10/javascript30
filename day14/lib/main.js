"use strict";

//copy
var dog = "budoy";
var puppy = dog;
console.log(dog, puppy);

dog = "newboy";
console.log(dog, puppy);
console.log();

//reference
var lakers = ["clarkson", "ball", "walton"];

//use slice to make a copy and original is untouched, no args to copy all values
//method1:
var lakers2 = lakers.slice();
lakers2[0] = "clarkson";
console.log("Lakers: ", lakers);
console.log("Slice Lakers: ", lakers2);

//or make a new array and use concat with the array to copy as args
//method2:
var lakers3 = [].concat(lakers);
lakers3[0] = "clarkson";
console.log("Lakers: ", lakers);
console.log("Concat Lakers: ", lakers3);

//method3:
var lakers4 = Array.from(lakers);
lakers4[2] = "kobe";
console.log("Lakers: ", lakers);
console.log("Array from Lakers: ", lakers4);

//using spread
//method4:
var lakers5 = [].concat(lakers);
lakers5[2] = "payton";
console.log("Lakers: ", lakers);
console.log("Spread Lakers: ", lakers5);

//copy and make changes on original array
var lakers1 = lakers;
lakers1[0] = "thomas";
console.log("Copy Lakers: ", lakers1);
console.log("Lakers: ", lakers);

//cloning objects
var warriors = {
	coach: "Steve Kerr",
	manager: "Dan Gilbert",
	roster: {
		pg: "Curry",
		sf: "Durant"
	}
};

var war2 = Object.assign({}, warriors);
war2.manager = "Popovich";
console.log(warriors);
console.log(war2);