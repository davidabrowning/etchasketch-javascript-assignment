export class Stylus {
    constructor() {
        this.minX = 0;
        this.minY = 0;
        this.maxX = 50;
        this.maxY = 50;

        // Start in top left corner
        this.x = this.minX;
        this.y = this.maxY;
    }
    getX() { return this.x; }
    getY() { return this.y; }
    getMinX() { return this.minX; }
    getMinY() { return this.minY; }
    getMaxX() { return this.maxX; }
    getMaxY() { return this.maxY; }
    moveRight() {
        if (this.x < this.maxX)
            this.x++;
    }
    moveLeft() {
        if (this.x > this.minX)
            this.x--;
    }
    moveUp() {
        if (this.y < this.maxY)
            this.y++;
    }
    moveDown() {
        if (this.y > this.minY)
            this.y--;
    }
}