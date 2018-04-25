"use strict";
function tick() {
	for (var object of objects) {
		object[1].tick();
	}
	render();
}