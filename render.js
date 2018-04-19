function render() {
    context.fillStyle = "#A1887F";
    context.fillRect(0, 0, width, heigth);
    

    for (var i = 0; i < objects.length; i++) {
        objects[i].render();
    }
    
}