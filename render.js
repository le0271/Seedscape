"use strict";
function render() {
	context.fillStyle = COLORS.brown._300;
	context.fillRect(0, 0, width, width / ASPECT_RATIO);
	for (var object of objects) {
		object[1].render();
	}
}