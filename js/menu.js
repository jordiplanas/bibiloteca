class Menu {
    constructor(bk, img, sub) {
        this.buttonImg = img;
        this.subImg = sub;
        this.b0 = new MenuButton(50, 50, 0, this.buttonImg, this.subImg);
        this.bkImg = bk;
    }

    display() {
        cursorsIsActive = true;
        image(this.bkImg, 0, 0, width, height)
        this.b0.display(cursorPosition)
    }

}

class MenuButton {

    constructor(x, y, target, img, subImg) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.target = target;
        this.cP = createVector(0, 0);
        this.maxSz = createVector(this.img.width, this.img.height);
        this.sz = createVector(160, this.img.height);
        this.grow = 0;
        this.subBut = new subButton(subImg, this.target);
    }

    display(cP) {
        this.cP = cP;

        image(this.img, 50, 50, this.sz.x, this.sz.y)

        this.isActivated();
    }

    isActivated() {

        if (this.cP.x > this.x && this.cP.x < this.x + this.sz.x && this.cP.y > this.y && this.cP.y < this.y + this.sz.y) {
            this.subBut.display(this.cP, this.x, this.y + this.sz.y / 1.4, this.sz.x, this.sz.y / 8)
            if (this.sz.x < 227) {
                this.sz.x += 5;
                this.sz.y += 2;
            }
        } else {
            if (this.sz.x > 160) {
                this.sz.x -= 5;
                this.sz.y -= 2;
            }

        }

    }

}

class subButton {
    constructor(img, target) {
        this.img = img;
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
        image(this.img, this.pos.x + 10, this.pos.y - 13, this.sz.x - 20, this.sz.y)
            /* fill(200);
             noStroke();
             rect(this.pos.x + 10, this.pos.y - 3, this.sz.x - 20, this.sz.y, 12);
             fill(0);
             textSize(24)
             text(this.target, this.pos.x + this.sz.x / 2, this.pos.y + this.sz.y / 1.6);*/
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