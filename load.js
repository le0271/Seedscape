var ASPECT_RATIO = 4/3, width;
var canvas, context;
var objects = [];

window.addEventListener("load", load);
function load() {
    canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");
	resize();
    window.addEventListener("resize", resize);
    setInterval(tick, 1000/30);
}