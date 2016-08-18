$(document).ready(function(){
var gridSize = +prompt("Enter a grid dimension", "Enter a value of 128 or less");
while (gridSize > 128 || gridSize / gridSize != 1) {
    gridSize = +prompt("Max value = 128", "Enter a value of 128 or less");
}
var containerSize = +$("#container").width();
var boxSize = containerSize/gridSize;
    for (i=0; i < gridSize; i++) {
        for (j=0; j < gridSize; j++){
            var newBox = $("<div class='box'></div>");
            $("#container").append(newBox);
        }
    }
    $(".box").width(boxSize).height(boxSize);
    $(".box").hover(function() {
        $(this).addClass("highlighted");
    });
});