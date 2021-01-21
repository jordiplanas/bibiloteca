class StandBy {
    constructor() {
        this.brush = new Brush(this.bk);
        this.button = new Button(width / 2 - 180, height / 2 + 90, 355, 77, 1, undefined);
        this.state = 0;
        this.timer = new Timer(5000);
        this.timer.start();
        this.ind = 0;
        this.cursor = new Cursor();
    }

    display(cP) {

        switch (this.state) {
            case 0:
                if (frameCount % 100 == 0 && this.ind < 4) {
                    this.ind++;
                } else if (this.ind == 4) {
                    this.timer.start();
                    this.state = 1;
                }
                image(sbImages[this.ind], 0, 0, width, height)
                break;
            case 1:
                if (cP.x + cP.y > 0 && tracking == true) {
                    this.drawing(cP)
                }
                if (this.timer.isFinished()) {
                    this.state = 2;
                }
                break;
            case 2:
                image(sbImages[5], 0, 0, width, height)
                this.button.activated(cP.x, cP.y)
                cursorsIsActive = true;
                if (this.button.reading) this.button.display();
                //needs to go back to standby if no user
                break;
            case 3:
                this.buttonScreen();
                break;
        }

    }
    drawing(cP) {
        this.brush.display(cP.x, cP.y);
        this.brush.op = 255;
        if (frameCount % 7 == 0) {
            this.brush.stipple();
        }
    }
    buttonScreen() {
        cursorsIsActive = true;
        this.button.display();
        this.button.activated(cursorPosition.x, cursorPosition.y)
    }
}

class Brush {
    constructor(bk) {
        this.x = 0;
        this.y = 0;
        this.px = 0;
        this.py = 0;
        this.bk = bk;
        this.op = 250;

    }
    display(mX, mY) {
        this.x += (mX - this.x) / 12;
        this.y += (mY - this.y) / 12;
        if (frameCount > 40) {
            this.drizzle();
        }
        this.px = this.x;
        this.py = this.y;
    }
    drizzle() {
        push();
        let s = 1 + 30 / dist(this.px, this.py, this.x, this.y);
        s = min(15, s);
        strokeWeight(s);
        stroke(240);
        line(this.px, this.py, this.x, this.y);
        pop()
    }
    stipple() {
        push();
        noStroke();
        fill(random(100, 255));
        let radius = random(3, 12);
        ellipse(this.px + random(-30, 30), this.py + random(30, -30), radius);
        radius = random(3, 12);
        ellipse(this.px + random(-30, 30), this.py + random(30, -30), radius);
        pop()
    }
    reset() {

        if (this.op > 0) this.op--;

    }
}