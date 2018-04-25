"use strict";
function click() {
	var click_x = event.offsetX / width;
	var click_y = event.offsetY / width;
	for (var object of objects) {
		object[1].click(click_x, click_y);
	}
}