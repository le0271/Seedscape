load_sequence.push(
	function() {
		objects.push({
			click: function() {},
			name: "Information", 
			render: function() {
				context.fillStyle = COLORS.grey._50;
				context.fillRect(0.20 * width, 0.60 * width, 0.60 * width, 0.15 * width);
			},
			tick: function() {},
		});
	}
);