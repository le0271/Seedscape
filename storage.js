load_sequence.push(
	function () {
		objects.push({
			click: function (click_x, click_y) { },
			name: "Storage",
			render: function () {
				context.fillStyle = COLORS.grey._50;
				context.fillRect(0.80 * width, 0.00 * width, 0.20 * width, 0.75 * width);
			},
			tick: function () { },
		});
	}
);