import { DrawingBoard } from "./models/DrawingBoard.js";

let drawingBoard = new DrawingBoard();
drawingBoard.initialize();

document.onkeydown = function(e) {
    switch (e.key) {
        case "ArrowLeft":
        case "a":
        case "A":
            drawingBoard.moveLeft();
            break;
        case "ArrowUp":
        case "w":
        case "W":
            drawingBoard.moveUp();
            break;
        case "ArrowRight":
        case "d":
        case "D":
            drawingBoard.moveRight();
            break;
        case "ArrowDown":
        case "s":
        case "S":
            drawingBoard.moveDown();
            break;
    }
}