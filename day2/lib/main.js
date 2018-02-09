"use strict";

var secondHand = document.querySelector(".sec-hand");
var minuteHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");

function setTime() {
	var now = new Date();

	var seconds = now.getSeconds();
	var secondDeg = seconds / 60 * 360 + 90;
	secondHand.style.transform = "rotate(" + secondDeg + "deg)";

	var minute = now.getMinutes();
	var minuteDeg = minute / 60 * 360 + 90;
	minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";

	var hour = now.getHours();
	var hourDeg = hour / 12 * 360 + 90;
	hourHand.style.transform = "rotate(" + hourDeg + "deg)";
	//console.log(hourDeg);
}

setInterval(setTime, 1000);