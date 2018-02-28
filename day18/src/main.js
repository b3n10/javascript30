const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
	.map(tn => tn.dataset.time) // return an array of data-time
	.map(timeCode => {
		const [min, sec] = timeCode.split(":").map(parseFloat);
		return (min * 60) + sec;
	})
	.reduce((total, secs) => total + secs);

	let secondsLeft = seconds;
	const hours = Math.floor(secondsLeft / 3600);
	secondsLeft = secondsLeft % 3600;

	const mins = Math.floor(secondsLeft / 60);
	secondsLeft = secondsLeft % 60;

	console.log("Total Time: "
			+ ((hours < 10) ? "0" + hours : hours)
			+ ":"
			+ ((mins < 10) ? "0" + mins : mins)
			+ ":"
			+ ((secondsLeft < 10) ? "0" + secondsLeft : secondsLeft)
			);
