var ASPECT_RATIO = 4/3, height, width;
var canvas, context;
var objects = [];
var items = [];
window.addEventListener("load", load);
function load() {
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");

    objects.push({
        name: "Shop", 
        render: function() {},
        tick: function() {},
    }); 

    objects.push({
        name: "Board", 
        render: function() {},
        tick: function() {},
    }); 

    objects.push({
        name: "Storage", 
        render: function() {},
        tick: function() {},
    }); 

    items.push({
        
        cost: [],
        name: "Well",
        price: 50, 
        render: function() {},
          
    }); 

    items.push({
        
        cost: [],
        name: "Corn",
        price: 50, 
        render: function() {},
          
    }); 

    
    
    window.addEventListener("resize", resize);
    setInterval(tick, 1000/30);
    
}

//lag en array med data fordi bare en array for de greiene
//var obj ["shop", ];
//items
//name
//render
//price 
//cost: [], [], [],