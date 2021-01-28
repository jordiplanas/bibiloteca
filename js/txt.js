var isPlaying = false;

class Txt {
    constructor() {
        this.stage = 0;
        cursorsIsActive = true;
        this.popUp = new PopUp();
        this.nextButton = new vidButton(50, 150, 1);
        this.prevButton = new vidButton(50, 250, 0);
        this.backButton = new vidButton(50, 150, 2);
    }
    display() {
        console.log(this.stage)
        image(currentVideo, 0, 0)
        this.popUp.display();
        var dur = currentVideo.time() / currentVideo.duration();

        switch (this.stage) {
            case 0:
                this.nextButton.display();
                if (this.nextButton.isInside()) {
                    currentVideo.stop();
                    currentVideo = vids[1];
                    currentVideo.play();
                    this.stage = 1;
                }
                break;
            case 1:
                this.nextButton.display();
                this.prevButton.display();
                if (this.nextButton.isInside()) {
                    currentVideo.stop();
                    currentVideo = vids[2];
                    currentVideo.play();
                    this.stage = 2;
                }
                if (this.prevButton.isInside()) {
                    currentVideo.stop();
                    currentVideo = vids[0];
                    currentVideo.play();
                    this.stage = 0;
                }

                break;
            case 2:
                this.prevButton.display();
                this.backButton.display();
                if (this.prevButton.isInside()) {
                    currentVideo.stop();
                    currentVideo = vids[1];
                    currentVideo.play();
                    this.stage = 1;
                }
                if (this.backButton.isInside()) {
                    screen = 1;
                }
                break;
        }
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
            this.f = 150;
            this.content();
        } else {
            this.f = 200;
        }
    }
    content() {
        push();
        fill(0, 20)
        rect(0, 0, width, height)
        noStroke();
        fill(255)
        rect(width / 6, height / 7, width / 3 * 2, height / 3 * 2, 8)
        pop();
    }

}
class vidButton {
    constructor(x, y, next) {
        this.reading;
        this.buttonState; // the current reading from the input pin
        this.lastButtonState = false; // the previous reading from the input pin
        this.lastDebounceTime = 0; // the last time the output pin was toggled
        this.debounceDelay = 1000;
        this.next = next;
        this.pos = createVector(x, y);
        this.sz = createVector(200, 70);
        this.cP = createVector(0, 0);
        this.f = 200;
        this.text = "";
        this.cP = createVector(0, 0);
        switch (this.next) {
            case 0:
                this.text = "anterior"
                break;
            case 1:
                this.text = "següent"
                break;
            case 2:
                this.text = "finalitzar"
                break;
        }

    }
    display() {
        this.cP = cursorPosition;
        push();
        fill(this.f);
        noStroke();
        rect(this.pos.x, this.pos.y, this.sz.x, this.sz.y, 10)
        fill(0);
        textSize(24)
        text(this.text, this.pos.x + 20, this.pos.y + 40)
        pop();
    }

    isInside() {
        if (this.cP.x > this.pos.x && this.cP.x < this.pos.x + this.sz.x && this.cP.y > this.pos.y && this.cP.y < this.pos.y + this.sz.y) {
            this.reading = true;
            this.f = 150;

        } else {
            this.reading = false;
            this.f = 200;

        }
        if (this.reading != this.lastButtonState) {
            // reset the debouncing timer
            this.lastDebounceTime = millis();
        }

        if ((millis() - this.lastDebounceTime) > this.debounceDelay) {
            // whatever the reading is at, it's been there for longer than the debounce
            // if the button state has changed:
            if (this.reading != this.buttonState) {
                this.buttonState = this.reading;
                // only change screen if is inside de button
                if (this.buttonState == true) {
                    return true;
                }
            }
        }

        // save the reading. Next time through the loop, it'll be the lastButtonState:
        this.lastButtonState = this.reading;
    }

}