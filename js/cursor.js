class Cursor {
    constructor() {
        this.sz = 10;
        this.pos = createVector(0, 0);
        this.col = 255;
    }
    display(pos) {
        push()
        this.pos = pos;
        stroke(this.col)
        strokeWeight(4);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.sz)
        pop();
    }
}