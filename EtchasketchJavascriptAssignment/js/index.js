window.onload = function() {
    drawingBoard = new DrawingBoard();
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
}

class DrawingBoard {
    constructor() {
        this.stylus = new Stylus();
        this.drawingArea = document.getElementById("drawing-area");
    }
    getStylus() { return this.stylus; }
    initialize() {
        let table = document.createElement("table");
        this.drawingArea.appendChild(table);
        for (let y = this.stylus.maxY; y >= 0; y--) {
            let row = document.createElement("tr");
            table.appendChild(row);
            for (let x = 0; x < this.stylus.maxX; x++) {
                let cell = document.createElement("td");
                row.appendChild(cell);
                cell.classList.add("drawing-board-location");
                cell.id = (x + "x" + y + "y");
            }
        }
        this.paintAtStylusLocation();
        document.onkeydown = function() {
            this.moveRight();
        }
    }
    getCellByLocation(x, y) {
        let cell = document.getElementById(x + "x" + y + "y");
        return cell;
    }
    paintAtStylusLocation() {
        let cellAtStylusLocation = this.getCellByLocation(this.stylus.x, this.stylus.y);
        cellAtStylusLocation.classList.add("painted");
    }
    moveRight() {
        this.stylus.moveRight();
        this.paintAtStylusLocation();
    }
    moveLeft() {
        this.stylus.moveLeft();
        this.paintAtStylusLocation();
    }
    moveUp() {
        this.stylus.moveUp();
        this.paintAtStylusLocation();
    }
    moveDown() {
        this.stylus.moveDown();
        this.paintAtStylusLocation();
    }
}

class Stylus {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.maxX = 50;
        this.maxY = 50;
    }
    getX() { return this.x; }
    getY() { return this.y; }
    getMaxX() { return this.maxX; }
    getMaxY() { return this.maxY; }
    moveRight() {
        if (this.x < this.maxX)
            this.x++;
    }
    moveLeft() {
        if (this.x > 0)
            this.x--;
    }
    moveUp() {
        if (this.y < this.maxY)
            this.y++;
    }
    moveDown() {
        if (this.y > 0)
            this.y--;
    }
    
}