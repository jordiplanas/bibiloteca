class Cursor {
    constructor() {
        this.sz = 10;
        this.pos = createVector(0, 0);
    }
    display(pos) {
        push()
        this.pos = pos;
        stroke(255)
        strokeWeight(4);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.sz)
        pop();
    }
}