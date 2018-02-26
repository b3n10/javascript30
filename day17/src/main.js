const bands = [
	"Eraserheads", "Bamboo", "A Rivermaya", "Spongecola", "The Sitti", "An Hale", "Barbie Almalbis", "Imago",
	"CueShe", "An Oranges and Lemons", "A Kaju", "Kamikazee", "The Parokya ni Edgar"
];

function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, "").trim();
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

document.getElementById("bands").innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("");
