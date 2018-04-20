load_sequence.push(
	function() {
		objects.push({
			click: function() {},
			name: "Shop", 
			render: function() {
				context.fillStyle = COLORS.grey._50;
				context.fillRect(0.00 * width, 0.00 * width, 0.20 * width, 0.75 * width);
			},
			tick: function() {},
		});
	}
);