export class Stylus {
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