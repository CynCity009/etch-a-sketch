$(document).ready(function(){
var gridSize = +prompt("Enter a grid dimension", "Enter a value of 80 or less");
while (gridSize > 80 || gridSize / gridSize != 1) {
    gridSize = +prompt("Max value = 80", "Enter a value of 80 or less");
}
var containerSize = +$("#container").width();
var boxSize = containerSize/gridSize;
    for (i=0; i < gridSize * gridSize; i++) {
        var newBox = $("<div class='box'></div>");
        $("#container").append(newBox);
    }
    $(".box").width(boxSize).height(boxSize);
    $(".box").hover(function() {
        $(this).addClass("highlighted");
    });
});