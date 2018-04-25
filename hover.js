"use strict";
function hover() {
	var hover_x = event.offsetX / width;
	var hover_y = event.offsetY / width;
	for (var object of objects) {
		object[1].hover(hover_x, hover_y);
	}
}