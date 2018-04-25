"use strict";
function resize() {
	width = Math.min(window.innerHeight * ASPECT_RATIO - window.innerHeight * BORDER_RATIO * 2, window.innerWidth - window.innerWidth * BORDER_RATIO * 2);
	canvas.height = width / ASPECT_RATIO;
	canvas.width = width;
	render();
}