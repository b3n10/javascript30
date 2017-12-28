const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondDeg = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondDeg}deg)`;

	const minute = now.getMinutes();
	const minuteDeg = ((minute / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

	const hour = now.getHours();
	const hourDeg = ((hour / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;
	//console.log(hourDeg);
}

setInterval(setTime, 1000);
