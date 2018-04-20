function tick() {
	for (var i = 0; i < objects.length; i++) {
		objects[i].tick();
	}
	render();
}