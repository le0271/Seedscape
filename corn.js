load_sequence.push(
    function() {
		items.set("corn", {
			click_amount: 1,
			cost: [["water", 1]],
			growth_amount: 4,
			growth_time: 5,
			name: "corn_plant",
			price: 100,
			product: "corn",
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
	}
);