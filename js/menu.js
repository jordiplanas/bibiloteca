class Menu {
    constructor() {
        this.b0 = new MenuButton(50, 50, 0);
    }

    display() {
        cursorsIsActive = true;
        background('#1899aa');
        this.b0.display(cursorPosition)
    }

}

class MenuButton {

    constructor(x, y, target) {
        this.x = x;
        this.y = y;
        this.img = target;
        this.target = target;
        this.cP = createVector(0, 0);
        this.sz = createVector(150, 200);
        this.grow = 0;
        this.subBut = new subButton(this.target);
    }

    display(cP) {
        this.cP = cP;
        push()
        noFill()
        stroke(255)
        strokeWeight(3)
        rect(this.x, this.y, this.sz.x, this.sz.y, 8)
        pop();
        this.isActivated();
    }

    isActivated() {

        if (this.cP.x > this.x && this.cP.x < this.x + this.sz.x && this.cP.y > this.y && this.cP.y < this.y + this.sz.y) {
            this.subBut.display(this.cP, this.x, this.y + this.sz.y / 1.3, this.sz.x, this.sz.y / 5)
            if (this.grow < 10) {
                this.grow++;
                this.sz.add(this.grow, this.grow);
            }
        } else {
            if (this.grow > 0) {
                this.grow--;
                this.sz.sub(this.grow, this.grow);
            }

        }

    }

}

class subButton {
    constructor(target) {
        this.pos = createVector(0, 0);
        this.sz = createVector(0, 0);
        this.target = target;
        this.cP = createVector(0, 0);
        this.t = 0;
    }

    display(cP, x, y, szx, szy) {
        this.cP = cP;
        this.pos.x = x;
        this.pos.y = y;
        this.sz.x = szx;
        this.sz.y = szy;
        fill(200);
        noStroke();
        rect(this.pos.x + 10, this.pos.y - 3, this.sz.x - 20, this.sz.y, 12);
        fill(0);
        textSize(24)
        text(this.target, this.pos.x + this.sz.x / 2, this.pos.y + this.sz.y / 1.6);
        this.isActivated();
    }

    isActivated() {
        if (this.cP.x > this.pos.x && this.cP.x < this.pos.x + this.sz.x && this.cP.y > this.pos.y && this.cP.y < this.pos.y + this.sz.y) {
            console.log("insideSub")
            this.t++;
            if (this.t > 70) {
                clear();
                currentVideo.play();
                screen = 2;
                this.t = 0;
            }
        } else {
            this.t = 0;
        }
    }
}