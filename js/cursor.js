class Cursor {
    constructor() {
        this.sz = 10;
        this.pos = createVector(0, 0);
    }
    display(pos) {
        this.pos = pos;
        ellipse(this.pos.x, this.pos.y, this.sz)
    }
}