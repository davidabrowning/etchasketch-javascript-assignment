import { DrawingBoard } from "./models/DrawingBoard.js";

let drawingBoard = new DrawingBoard();
drawingBoard.initialize();

document.onkeydown = function(e) {
    if (e.keyCode == 37) // left arrow
        drawingBoard.moveLeft();
    if (e.keyCode == 38) // up arrow
        drawingBoard.moveUp();
    if (e.keyCode == 39) // right arrow
        drawingBoard.moveRight();
    if (e.keyCode == 40) // down arrow
        drawingBoard.moveDown();
}