class StartButton {
    constructor(x, y, next, img = undefined, hoverImg = undefined) {
        this.pos = createVector(x, y);
        this.next = next;
        this.txt = txt;
        this.img = img;
        this.hoverImg = hoverImg;
        this.reading;
        this.buttonState; // the current reading from the input pin
        this.lastButtonState = false; // the previous reading from the input pin
        this.lastDebounceTime = 0; // the last time the output pin was toggled
        this.debounceDelay = 1000;
        this.op = 0;
    }
    display() {
        this.op=0;
        image(this.img, this.pos.x, this.pos.y);
    }

    hover() {
        push();

        console.log(this.op);
        tint(255, this.op);
        image(this.hoverImg, this.pos.x, this.pos.y);
        pop();

    }

    activated(mX, mY) {
        if (mX > this.pos.x && mX < this.pos.x + this.img.width && mY > this.pos.y && mY < this.pos.y +  this.img.height) {
            console.log("hover")
           this.op +=1;
            this.reading = true; //hover
        } else {
            this.reading = false;
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
                    // click
                    screen = this.next;
                }
            }
        }

        // save the reading. Next time through the loop, it'll be the lastButtonState:
        this.lastButtonState = this.reading;

    }
}