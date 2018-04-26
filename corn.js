"use strict";
var action = function () {
	tile_database.set("corn", {
		click_amount: 1,
		cost: [["water", 1]],
		growth_amount: 4,
		growth_time: 5,
		name: "corn_plant",
		price: 100,
		product: "corn",
		product_amount: 4,
		product_value: 35,
		render: function (x, y, l, s) {
			// x, x-position; y, y-position; l, length; s, stage;
			// Stage 0 - seeds
			// Stage 1 - corn
			if (s = 1) {
				// Background
				context.fillStyle = COLORS.brown._400;
				context.fillRect(x, y, l, l);
				// Cob
				context.beginPath();
				context.moveTo(x + 0.44 * l, y + 0.36 * l);
				context.lineTo(x + 0.56 * l, y + 0.24 * l);
				context.lineTo(x + 0.68 * l, y + 0.16 * l);
				context.lineTo(x + 0.80 * l, y + 0.12 * l);
				context.lineTo(x + 0.76 * l, y + 0.24 * l);
				context.lineTo(x + 0.68 * l, y + 0.36 * l);
				context.lineTo(x + 0.56 * l, y + 0.48 * l);
				context.fillStyle = COLORS.amber._A200;
				context.fill();
				context.closePath();
				// Handle shadow
				context.beginPath();
				context.moveTo(x + 0.44 * l, y + 0.36 * l);
				context.lineTo(x + 0.56 * l, y + 0.48 * l);
				context.lineTo(x + 0.44 * l, y + 0.60 * l);
				context.lineTo(x + 0.32 * l, y + 0.48 * l);
				context.fillStyle = COLORS.green._600;
				context.fill();
				context.closePath();
				// Handle highlight
				context.beginPath();
				context.moveTo(x + 0.56 * l, y + 0.48 * l);
				context.lineTo(x + 0.44 * l, y + 0.60 * l);
				context.lineTo(x + 0.24 * l, y + 0.68 * l);
				context.lineTo(x + 0.32 * l, y + 0.48 * l);
				context.fillStyle = COLORS.green._500;
				context.fill();
				context.closePath();
				// Lower leaf
				context.beginPath();
				context.moveTo(x + 0.44 * l, y + 0.36 * l);
				context.lineTo(x + 0.56 * l, y + 0.48 * l);
				context.lineTo(x + 0.56 * l, y + 0.68 * l);
				context.fillStyle = COLORS.green._500;
				context.fill();
				context.closePath();
				// Upper leaf
				context.beginPath();
				context.moveTo(x + 0.44 * l, y + 0.36 * l);
				context.lineTo(x + 0.56 * l, y + 0.48 * l);
				context.lineTo(x + 0.24 * l, y + 0.36 * l);
				context.fillStyle = COLORS.green._400;
				context.fill();
				context.closePath();
			}
		},
	});
};
load_sequence_add(action, 0);