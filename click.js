function click() {

    var click_x = event.offsetX / width;
    var click_y = event.offsetY / width;
    for (var i = 0; i < objects.length; i++) {
        objects[i].click(click_x, click_y);
    }
    console.log("testing testing 123 123 123 123 123 123 123");
}
//offsetx/w
//offsety/w/ar