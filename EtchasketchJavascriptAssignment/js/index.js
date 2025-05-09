import { DrawingBoard } from "./models/DrawingBoard.js";

let drawingBoard = new DrawingBoard();
drawingBoard.initialize();

document.onkeydown = function(e) {
    switch (e.key) {
        case "ArrowLeft":
            drawingBoard.moveLeft();
            break;
        case "ArrowUp":
            drawingBoard.moveUp();
            break;
        case "ArrowRight":
            drawingBoard.moveRight();
            break;
        case "ArrowDown":
            drawingBoard.moveDown();
            break;
    }
}