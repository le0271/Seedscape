load_sequence.push(
	function () {
		objects.push({
			click: function (click_x, click_y) {
				board_length_increment();
			},
			name: "Board",
			render: function () {
				context.fillStyle = COLORS.grey._50;
				for (var i = 0; i < board_length; i++) {
					for (var j = 0; j < board_length; j++) {
						items.get("Corn").render((0.25 + j * 0.5 / board_length) * width, (0.25 + i * 0.5 / board_length) * width, 1);
					}
				}
			},
			tick: function () { },
		});
	}
);
function board_length_increment() {
	board_length++;
	for (var i = 1; i < board_length; i++) {
		board.splice(board_length * i - 1, 0, null);
	}
	for (var i = 0; i < board_length; i++) {
		board.push(null);
	}
}