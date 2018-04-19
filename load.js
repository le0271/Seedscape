var ASPECT_RATIO = 4/3, height, width;
var canvas, context;
var objects = [];

window.addEventListener("load", load);
function load() {
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    window.addEventListener("resize", resize);
    setInterval(tick, 1000/30);
    
}

//lag en array med data fordi bare en array for de greiene
//var obj ["shop", ];