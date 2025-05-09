import { Stylus } from "./Stylus.js";

export class DrawingBoard {
    constructor() {
        this.stylus = new Stylus();
        this.drawingArea = document.getElementById("drawing-area");
    }
    getStylus() { return this.stylus; }
    drawTable() {
        let table = document.createElement("table");
        table.id = ("drawing-table");
        this.drawingArea.appendChild(table);
        for (let y = this.stylus.maxY; y >= 0; y--) {
            let row = document.createElement("tr");
            table.appendChild(row);
            for (let x = 0; x <= this.stylus.maxX; x++) {
                let cell = document.createElement("td");
                row.appendChild(cell);
                cell.classList.add("drawing-board-location");
                cell.id = (x + "x" + y + "y");
            }
        }
        this.paintAtStylusLocation();
    }
    deleteTable() {
        let table = document.getElementById("drawing-table");
        table.remove();
    }
    erase() {
        this.deleteTable();
        this.drawTable();
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