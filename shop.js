load_sequence.push(
	function() {
		objects.push({
			name: "Shop", 
			render: function() {
				context.fillStyle = "white";
				context.fillRect(0.00 * width, 0.00 * width, 0.20 * width, 0.75 * width);
			},
			tick: function() {},
		});
	}
);