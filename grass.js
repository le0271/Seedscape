"use strict";
var action = function () {
	tile_database.set("grass", {
		click_amount: 1,
		cost: [["water", 1]],
		growth_amount: 4,
		growth_time: 4,
		name: "tussock",
		price: 100,
		product: "grass",
		product_amount: 4,
		product_value: 30,
		render: function () { },
	});
};
load_sequence_add(action, 0);