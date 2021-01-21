class Button {
    constructor(x, y, w, h, next, txt) {
        this.pos = createVector(x, y);
        this.sz = createVector(w, h);
        this.next = next;
        this.txt = txt;
        this.reading;
        this.buttonState; // the current reading from the input pin
        this.lastButtonState = false; // the previous reading from the input pin
        this.lastDebounceTime = 0; // the last time the output pin was toggled
        this.debounceDelay = 1000;

    }
    display() {
        noFill();
        rect(this.pos.x, this.pos.y, this.sz.x, this.sz.y);
        if (this.text != undefined) {
            fill(0);
            text(this.txt, this.pos.x, this.pos.y);
        }
    }
    activated(mX, mY) {
        if (mX > this.pos.x && mX < this.pos.x + this.sz.x && mY > this.pos.y && mY < this.pos.y + this.sz.y) {
            console.log(this.txt)
            this.reading = true;
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
                    screen = this.next;
                }
            }
        }

        // save the reading. Next time through the loop, it'll be the lastButtonState:
        this.lastButtonState = this.reading;

    }
}