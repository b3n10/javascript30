const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidth = 1;
let toggleSize = false;

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#BADA55";//color of stroke
ctx.lineJoin = "round";//rounded shape of line stroke
ctx.lineCap = "round";
ctx.lineWidth = lineWidth;

function draw(event) {
	if (!isDrawing) return;// stop fn if mouse is not clicked down

	//change stroke color before moving
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	//start from
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineWidth = lineWidth;

	//go to
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();

	//update x, y, hue using destructuring
	hue++;
	[lastX, lastY] = [event.offsetX, event.offsetY];
	//toggle lineWidth size
	(lineWidth >= 100 || lineWidth <= 1) ? toggleSize = !toggleSize : toggleSize = toggleSize;
	(toggleSize) ? lineWidth++ : lineWidth--;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => {
	isDrawing = true;
	//update x, y, lineWidth every time mouse is clicked
	[lastX, lastY] = [event.offsetX, event.offsetY];
	(lineWidth >= 100 || lineWidth <= 1) ? toggleSize = !toggleSize : toggleSize = toggleSize;
	(toggleSize) ? lineWidth++ : lineWidth--;
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

