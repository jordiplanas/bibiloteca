class StandBy {
    constructor() {
        this.brush = new Brush(this.bk);
        this.button = new StartButton(width / 2 - 180, height / 2 + 90, 1, enterButton ,enterButtonHover );
        this.state = 0;
        this.cursor = new Cursor();
    }

    display(cP) {
        console.log(this.state);
        image(videoIntro,0,0)
        switch (this.state) {
            case 0:
                if(videoIntro.time()>=25){
                    this.state = 1;
                }
                break;
            case 1:
                if (cP.x + cP.y > 0 && tracking == true) {
                    this.drawing(cP)
                }
                 if(videoIntro.time()>=45){
                    this.state = 2;
                }
                break;
            case 2:
                this.button.activated(cP.x, cP.y)
                this.button.display();
       
                if (this.button.reading) this.button.hover();
                //needs to go back to standby if no user
                console.log("nouser "+ noUser);
                if (noUser) {
                    //this.ind = 0;
                    videoIntro.time(0)
                    this.state = 0;
                }
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
        console.log("drawing");
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