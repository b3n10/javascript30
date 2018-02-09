"use strict";

var canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var lineWidth = 1;
var toggleSize = false;

var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#BADA55"; //color of stroke
ctx.lineJoin = "round"; //rounded shape of line stroke
ctx.lineCap = "round";
ctx.lineWidth = lineWidth;

function draw(event) {
	if (!isDrawing) return; // stop fn if mouse is not clicked down

	//change stroke color before moving
	ctx.strokeStyle = "hsl(" + hue + ", 100%, 50%)";

	//start from
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineWidth = lineWidth;

	//go to
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();

	//update x, y, hue using destructuring
	hue++;

	//toggle lineWidth size
	var _ref = [event.offsetX, event.offsetY];
	lastX = _ref[0];
	lastY = _ref[1];
	lineWidth >= 100 || lineWidth <= 1 ? toggleSize = !toggleSize : toggleSize = toggleSize;
	toggleSize ? lineWidth++ : lineWidth--;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", function () {
	isDrawing = true;
	//update x, y, lineWidth every time mouse is clicked
	var _ref2 = [event.offsetX, event.offsetY];
	lastX = _ref2[0];
	lastY = _ref2[1];

	lineWidth >= 100 || lineWidth <= 1 ? toggleSize = !toggleSize : toggleSize = toggleSize;
	toggleSize ? lineWidth++ : lineWidth--;
});
canvas.addEventListener("mouseup", function () {
	return isDrawing = false;
});
canvas.addEventListener("mouseout", function () {
	return isDrawing = false;
});