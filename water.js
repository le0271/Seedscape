"use strict";
var action = function () {
	tile_database.set("water", {
		click_amount: 3,
		cost: [],
		growth_amount: 0,
		growth_time: 4,
		name: "well",
		price: 50,
		product: "water",
		product_amount: -1,
		product_value: 2,
		render: function (x, y, l, s) {
			// x, x-position; y, y-position; l, length; s, stage;
			// Background
			context.fillStyle = COLORS.light_blue._500;
			context.fillRect(x, y, l, l);
		},
	});
};
load_sequence_add(action, 0);

