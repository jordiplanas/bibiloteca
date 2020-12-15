class Cursor {
    constructor() {
        this.sz = 30;
        this.pos = createVector(0, 0);
        this.target = createVector(0, 0);
    }
    track(pos, tX, tY) {
        this.pos = pos;
        this.target.x = tX;
        this.target.y = tY;
        let distance = p5.Vector.dist(this.pos, this.target);
        if (distance < 100) {
            console.log("inside");
        }
        this.display(this.pos)

    }
    display(p) {
        ellipse(p.x, p.y, this.sz)
    }

}