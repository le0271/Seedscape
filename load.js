"use strict";
// Load data
var load_sequence = new Map();
// Rendering
var canvas,
	context,
	width;
// Data
var objects = new Map(),
	tile_database = new Map();
// Constants
const
	ASPECT_RATIO = 4 / 3,
	BORDER_RATIO = 1 / 20,
	TICKS_PER_SECOND = 30;
window.addEventListener("load", load);
function load() {
	canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");
	var current_stage_number = load_sequence.size,
		i = 0;
	while (current_stage_number != 0) {
		if (load_sequence.has(i)) {
			var stage_actions = load_sequence.get(i);
			for (var j = 0; j < stage_actions.length; j++) {
				stage_actions[j]();
			}
			current_stage_number--;
		}
		i++;
	}
	for (var object of objects) {
		object[1].load();
	}
	window.addEventListener("resize", resize);
	resize();
	canvas.addEventListener("click", click);
	canvas.addEventListener("mousemove", hover);
	setInterval(tick, 1000 / TICKS_PER_SECOND);
}
function load_sequence_add(action, stage) {
	if (!load_sequence.has(stage)) {
		load_sequence.set(stage, []);
	}
	load_sequence.get(stage).push(action);
}