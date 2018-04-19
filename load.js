var ASPECT_RATIO = 4 / 3, width;
var canvas, context;
var objects = [];
var items = [];
var TICKS_PER_SECOND = 30;
window.addEventListener("load", load);
function load() {
	canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");

	objects.push({
        name: "Shop", 
        render: function() {
            context.fillStyle = "white";
            context.fillRect(0, 0, 0.20 * width, 0.75 * width);
        },
        tick: function() {},
    });
    objects.push({
        name: "Board", 
        render: function() {
            context.fillStyle = "white";
            context.fillRect(0.25 * width, 0.05 * width, 0.50 * width, 0.50 * width);
            
        },
        tick: function() {},
    });
    objects.push({
        name: "Storage", 
        render: function() {},
        tick: function() {},
	});
	
	items.push({
		click_amount: 3,
		cost: [],
		growth_amount: 0,
		growth_time: 4,
		name: "Well",
		price: 50,
		product: "Water",
		product_amount: 4,
		product_value: 30,
		render: function () { },
	});
	items.push({
		click_amount: 1,
		cost: [[0, 1]],
		growth_amount: 4,
		growth_time: 4,
		name: "Corn plant",
		price: 100,
		product: "Corn",
		product_amount: 4,
		product_value: 30,
		render: function () { },
	});

	resize();
	window.addEventListener("resize", resize);
	setInterval(tick, 1000 / TICKS_PER_SECOND);
}