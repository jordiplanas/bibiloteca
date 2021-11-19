class Cursor {
    constructor() {
        this.sz = 55;
        this.pos = createVector(0, 0);
        this.col = "#dca26f";
    }
    display(pos) {
        push()
        this.pos = pos;
        stroke(this.col)
        strokeWeight(6);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.sz)
        pop();
    }
}