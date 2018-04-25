"use strict";
load_sequence.push(
	function () {
		objects.set("information", {
			click: function (click_x, click_y) { },
			hover: function (hover_x, hover_y) { },
			load: function () { },
			name: "information",
			render: function () {
				context.fillStyle = COLORS.grey._50;
				context.fillRect(0.20 * width, 0.60 * width, 0.60 * width, 0.15 * width);
			},
			tick: function () { },
		});
	}
);