export class ListenerHelper{
    static addListeners(drawingBoard) {
        ListenerHelper.addStylusListeners(drawingBoard);
        ListenerHelper.addEraseBoardListener(drawingBoard);
    }
    static addStylusListeners(drawingBoard) {
        document.onkeydown = (e) => {
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
    }
    static addEraseBoardListener(drawingBoard) {
        let eraseButton = document.getElementById("shake-button");
        eraseButton.onclick = () => {
            drawingBoard.erase();
        }
        eraseButton.onmouseover = () => {
            eraseButton.classList.add("active");
        }
        eraseButton.onmouseout = () => {
            eraseButton.classList.remove("active");
        }
    }
}