class Button {
    constructor(x, y, w, h, next, txt) {
        this.pos = createVector(x, y);
        this.sz = createVector(w, h);
        this.next = next;
        this.txt = txt;
    }
    display() {
        rect(this.pos.x, this.pos.y, this.sz.x, this.sz.y);
    }
    activated(mX, mY) {
        if (mX > this.pos.x && mX < this.pos.x + this.sz.x && mY > this.pos.y && mY < this.pos.y + this.sz.y) {
            screen = this.next;
            if (this.text != undefined) {
                txt = this.txt;
            }
            console.log(this.next + "    " + this.txt);
        }
    }
}