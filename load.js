// Load data
var load_sequence = [];
// Rendering
var	canvas,
	context,
	width;
// Data
var objects = [],
	items = [];
// Constants
var	ASPECT_RATIO = 4 / 3,
	BORDER_RATIO = 1 / 20,
	TICKS_PER_SECOND = 30;
window.addEventListener("load", load);
function load() {
	canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");
	
	for (var i = 0; i < load_sequence.length; i++) {
		load_sequence[i]();
	}

	// 0 - Water
	items.push({
		click_amount: 3,
		cost: [],
		growth_amount: 0,
		growth_time: 4,
		name: "Well",
		price: 50,
		product: "Water",
		product_amount: -1,
		product_value: 2,
		render: function () { },
	});
	// 1 - Grass
	items.push({
		click_amount: 1,
		cost: [[0, 1]],
		growth_amount: 4,
		growth_time: 4,
		name: "Tussock",
		price: 100,
		product: "Grass",
		product_amount: 4,
		product_value: 30,
		render: function () { },
	});
	// 2 - Corn
	items.push({
		click_amount: 1,
		cost: [[0, 1]],
		growth_amount: 4,
		growth_time: 5,
		name: "Corn plant",
		price: 100,
		product: "Corn",
		product_amount: 4,
		product_value: 35,
		render: function (x, y, l) {
			// x, x-position; y, y-position; l, length; s, stage;
			// Stage 0 - seeds
			// Stage 1 - corn
			if (s = 1) {
				// Cob
				context.beginPath();
				context.moveTo(x + 0.40 * l, y + 0.48 * l);
				context.lineTo(x + 0.52 * l, y + 0.36 * l);
				context.lineTo(x + 0.64 * l, y + 0.28 * l);
				context.lineTo(x + 0.76 * l, y + 0.24 * l);
				context.lineTo(x + 0.72 * l, y + 0.36 * l);
				context.lineTo(x + 0.64 * l, y + 0.48 * l);
				context.lineTo(x + 0.52 * l, y + 0.60 * l);
				context.fillStyle = "#FFEB3B";
				context.fill();
				context.closePath();
				// Handle shadow
				context.beginPath();
				context.moveTo(x + 0.40 * l, y + 0.48 * l);
				context.lineTo(x + 0.52 * l, y + 0.60 * l);
				context.lineTo(x + 0.40 * l, y + 0.72 * l);
				context.lineTo(x + 0.28 * l, y + 0.60 * l);
				context.fillStyle = "#388E3C";
				context.fill();
				context.closePath();
				// Handle highlight
				context.beginPath();
				context.moveTo(x + 0.52 * l, y + 0.60 * l);
				context.lineTo(x + 0.40 * l, y + 0.72 * l);
				context.lineTo(x + 0.20 * l, y + 0.80 * l);
				context.lineTo(x + 0.28 * l, y + 0.60 * l);
				context.fillStyle = "#4CAF50";
				context.fill();
				context.closePath();
				// Lower leaf
				context.beginPath();
				context.moveTo(x + 0.40 * l, y + 0.48 * l);
				context.lineTo(x + 0.52 * l, y + 0.60 * l);
				context.lineTo(x + 0.52 * l, y + 0.80 * l);
				context.fillStyle = "#43A047";
				context.fill();
				context.closePath();
				// Upper leaf
				context.beginPath();
				context.moveTo(x + 0.40 * l, y + 0.48 * l);
				context.lineTo(x + 0.52 * l, y + 0.60 * l);
				context.lineTo(x + 0.20 * l, y + 0.48 * l);
				context.fillStyle = "#4CAF50";
				context.fill();
				context.closePath();
			}
		},
	});

	window.addEventListener("resize", resize);
	resize();
	setInterval(tick, 1000 / TICKS_PER_SECOND);
}