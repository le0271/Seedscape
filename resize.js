function resize() {
	height = Math.min(window.innerHeight, window.innerWidth / ASPECT_RATIO);
	width = height * ASPECT_RATIO;
	canvas.height = height;
	canvas.width = width;
	render();
}