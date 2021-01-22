class Txt {
    constructor() {
        this.stage = 0;
        this.popUp = new PopUp();
        cursorsIsActive = true;

    }
    display() {

        var dur = currentVideo.time() / currentVideo.duration();
        /*   if (currentVideo.time() > 11 && this.stage == 0) {
               currentVideo.pause();
               if (mouseIsPressed) {
                   this.stage = 1;
                   currentVideo.play();
               }
           }

           if (this.stage == 1 && currentVideo.time() > 22) {
               currentVideo.pause();
               if (mouseIsPressed) {
                   this.stage = 2;
                   currentVideo.play();
               }
           }*/
        if (dur == .95) {
            this.stage = 3;
            currentVideo.pause();
        }
        image(currentVideo, 0, 0)
        this.popUp.display();

    }
}
class PopUp {
    constructor() {
        this.pos = createVector(50, 50);
        this.sz = createVector(200, 70);
        this.cP = createVector(0, 0);
        this.f = 200;
        cursor.col = 0;
    }
    display() {
        this.cP = cursorPosition;
        //console.log(this.cP)
        push()
        fill(this.f);
        noStroke();
        rect(this.pos.x, this.pos.y, this.sz.x, this.sz.y, 10)
        fill(0);
        textSize(24)
        text("Saber-ne més", this.pos.x + 20, this.pos.y + 40)
        pop();
        this.isInside();
    }
    isInside() {
        if (this.cP.x > this.pos.x && this.cP.x < this.pos.x + this.sz.x && this.cP.y > this.pos.y && this.cP.y < this.pos.y + this.sz.y) {
            console.log("isInside")
            currentVideo.pause();
            this.f = 150;
            this.content();
        } else {
            this.f = 200;
            currentVideo.play();
        }
    }
    content() {
        push();
        fill(0, 20)
        rect(0, 0, width, height)
        noStroke();
        fill(255)
        rect(width / 6, height / 6, width / 3 * 2, height / 3 * 2, 8)
        pop();
    }

}
class vidButton {
    constructor() {

    }
    display() {

    }

}