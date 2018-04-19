load_sequence.push(
	function() {
		objects.push({
			name: "Information", 
			render: function() {
				context.fillStyle = "white";
				context.fillRect(0.20 * width, 0.60 * width, 0.60 * width, 0.15 * width);
			},
			tick: function() {},
		});
	}
);