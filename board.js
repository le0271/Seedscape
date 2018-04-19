load_sequence.push(
	function() {
		objects.push({
			name: "Board", 
			render: function() {
				context.fillStyle = COLORS.grey._50;
				context.fillRect(0.25 * width, 0.05 * width, 0.50 * width, 0.50 * width);
				items.get("corn").render(0.25 * width, 0.05 * width, 0.25 * width, 1);
				items.get("corn").render(0.50 * width, 0.05 * width, 0.25 * width, 1);
				items.get("corn").render(0.25 * width, 0.30 * width, 0.25 * width, 1);
				items.get("corn").render(0.50 * width, 0.30 * width, 0.25 * width, 1);
			},
			tick: function() {},
		});
	}
);