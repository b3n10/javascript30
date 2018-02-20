"use strict";

var hero = document.querySelector(".hero");
var text = document.querySelector("h1");
var walk = 100; // 100px , shadow stretch size

function shadow(e) {
	// const width = this.offsetWidth;// viewport width
	// const height = this.offsetHeight;// viewport height
	// destructure format:
	var width = this.offsetWidth,
	    height = this.offsetHeight;

	// let x = e.offsetX;
	// let y = e.offsetY;
	// destructure format:

	var x = e.offsetX,
	    y = e.offsetY;

	// this: element who called function
	// e.target: element where the event currently takes place

	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	// only limiting xWalk, yWalk (shadow stretch horizontally & vertically) from -50 to 50
	var xWalk = Math.round(x / width * walk) - walk / 2;
	var yWalk = Math.round(y / height * walk) - walk / 2;

	// check value
	// console.log(xWalk, yWalk);

	text.style.textShadow = "\n\t\t" + xWalk + "px " + yWalk + "px 0 rgba(192,192,192,1),\n\t\t" + xWalk * -1 + "px " + yWalk + "px 0 rgba(192,192,192,1),\n\t\t" + yWalk + "px " + xWalk * -1 + "px 0 rgba(192,192,192,1),\n\t\t" + yWalk * -1 + "px " + xWalk + "px 0 rgba(192,192,192,1)\n\t\t";
}

hero.addEventListener("mousemove", shadow);