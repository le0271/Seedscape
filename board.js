load_sequence.push(
	function () {
		objects.push({
			click: function (click_x, click_y) {
				board_length_increment();
			},
			name: "Board",
			render: function () {
				context.fillStyle = COLORS.grey._50;
				context.fillRect(0.25 * width, 0.05 * width, 0.50 * width, 0.50 * width);
				for (var i = 0; i < board_length; i++) {
					for (var j = 0; j < board_length; j++) {
						var box_size = 0.50 / board_length;
						items.get("corn").render((0.25 + j * box_size) * width, (0.05 + i * box_size) * width, box_size * width);
					}
				}
			},
			tick: function () { },
		});
	}
);
function board_length_increment() {
	if (board_length != 20) {
		board_length++;
		for (var i = 1; i < board_length; i++) {
			board.splice(board_length * i - 1, 0, null);
		}
		for (var i = 0; i < board_length; i++) {
			board.push(null);
		}
	}
}