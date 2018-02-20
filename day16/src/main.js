const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100;// 100px , shadow stretch size

function shadow(e) {
	// const width = this.offsetWidth;// viewport width
	// const height = this.offsetHeight;// viewport height
	// destructure format:
	const { offsetWidth: width, offsetHeight: height } = this;

	// let x = e.offsetX;
	// let y = e.offsetY;
	// destructure format:
	let {offsetX: x, offsetY: y} = e;


	// this: element who called function
	// e.target: element where the event currently takes place
	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	// only limiting xWalk, yWalk (shadow stretch horizontally & vertically) from -50 to 50
	const xWalk = Math.round((x / width * walk)) - (walk / 2);
	const yWalk = Math.round((y / height * walk)) - (walk / 2);

	// check value
	// console.log(xWalk, yWalk);

	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba(192,192,192,1),
		${xWalk * -1}px ${yWalk}px 0 rgba(192,192,192,1),
		${yWalk}px ${xWalk * -1}px 0 rgba(192,192,192,1),
		${yWalk * -1}px ${xWalk}px 0 rgba(192,192,192,1)
		`;
}

hero.addEventListener("mousemove", shadow);

