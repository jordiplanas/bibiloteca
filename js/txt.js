class Txt {
    constructor() {
        this.stage = 0;
        this.popUp = new PopUp();
        cursorsIsActive = true;

    }
    display() {

        var dur = currentVideo.time() / currentVideo.duration();
        if (currentVideo.time() > 11 && this.stage == 0) {
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
        }
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
        cursor.col = 0;
    }
    display() {
        this.cP = cursorPosition;
        //console.log(this.cP)
        rect(this.pos.x, this.pos.y, this.sz.x, this.sz.y)
        this.isInside();
    }
    isInside() {
        if (this.cP.x > this.pos.x && this.cP.x < this.pos.x + this.sz.x && this.cP.y > this.pos.y && this.cP.y < this.pos.y + this.sz.y) {
            console.log("isInside")
        }
    }

}
class vidButton {
    constructor() {

    }
    display() {

    }

}