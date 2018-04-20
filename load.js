// Load data
var load_sequence = [];
// Rendering
var canvas,
	context,
	width;
// Data
var objects = [],
	items = new Map();
// Constants
const ASPECT_RATIO = 4 / 3,
	BORDER_RATIO = 1 / 20,
	TICKS_PER_SECOND = 30;
window.addEventListener("load", load);
function load() {
	canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");

	for (var i = 0; i < load_sequence.length; i++) {
		load_sequence[i]();
	}

	window.addEventListener("resize", resize);
	resize();
	setInterval(tick, 1000 / TICKS_PER_SECOND);
}