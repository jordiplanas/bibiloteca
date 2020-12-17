class StandBy {
    constructor() {
        this.bk = createGraphics(width, height);
        this.brush = new Brush(this.bk);
        this.button = new Button(width / 2, height / 2, 100, 100, 1);
        this.state = 0;
    }
    display(cP) {
        console.log(this.state)
        switch (this.state) {
            case 0:
                text("HOLA!", 100, 100);
                if (mouseIsPressed) this.state = 1;
                break;
            case 1:
                this.drawing(cP)
                if (frameCount % 600 == 0) {
                    this.bk.clear();
                    this.state = 2;
                }
                break;
            case 2:
                this.buttonScreen();
                break;
        }

    }
    drawing(cP) {
        image(this.bk, 0, 0);
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
        let s = 1 + 30 / dist(this.px, this.py, this.x, this.y);
        s = min(15, s);
        push();
        this.bk.strokeWeight(s);
        this.bk.stroke(240);
        this.bk.line(this.px, this.py, this.x, this.y);
        pop();

    }
    stipple() {
        push();
        this.bk.noStroke();
        this.bk.fill(random(100, 255));
        let radius = random(3, 12);
        this.bk.ellipse(this.px + random(-30, 30), this.py + random(30, -30), radius);
        this.bk.radius = random(3, 12);
        ellipse(this.px + random(-30, 30), this.py + random(30, -30), radius);
        pop();
    }
    reset() {

        if (this.op > 0) this.op--;

    }
}