function resize() {
	width = Math.min(window.innerHeight * ASPECT_RATIO, window.innerWidth);
	canvas.height = width / ASPECT_RATIO;
	canvas.width = width;
	render();
}