"use strict";
var action = function () {
	objects.set("shop", {
		click: function (click_x, click_y) { },
		hover: function (hover_x, hover_y) { },
		load: function () { },
		name: "shop",
		render: function () {
			context.fillStyle = COLORS.grey._50;
			context.fillRect(0.00 * width, 0.00 * width, 0.20 * width, 0.75 * width);
		},
		tick: function () { },
	});
};
load_sequence_add(action, 1);