function render() {
	context.fillStyle = COLORS.brown._300;
	context.fillRect(0, 0, width, width / ASPECT_RATIO);
	for (var i = 0; i < objects.length; i++) {
		objects[i].render();
	}
}