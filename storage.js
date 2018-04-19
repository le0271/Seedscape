load_sequence.push(
	function() {
		objects.push({
			name: "Storage", 
			render: function() {
				context.fillStyle = "white";
				context.fillRect(0.80 * width, 0.00 * width, 0.20 * width, 0.75 * width);
			},
			tick: function() {},
		});
	}
);