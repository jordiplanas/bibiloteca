var isPlaying = false;

class videoText {
    constructor(seguent,anterior,inici,context) {
        this.stage = 0;
        cursorsIsActive = true; 
        this.contextButton = new vidButton(1658, 976, 3,context);
        this.nextButton = new vidButton(1120, 955, 1,seguent);
        this.prevButton = new vidButton(636,955, 0,anterior);
        this.backButton = new vidButton(64, 976, 2,inici);
        this.videoPaused = true;
    }
    display() {
       //image(vids[1],0,0)
        image(video, 0, 0);
        this.contextButton.display();
        this.contextButton.isInside();
        this.backButton.display();
        if (this.backButton.isInside()) {
                video.pause();
                this.stage = 0,
                screen = 1;
            }
        if(this.contextButton.isInside()){
            //video.pause();
         
            fill(115, 165, 207,30);
            rect(0,0,width,height)

            this.videoPaused=true;
            image(pops[currentVideo],0,0);
        } else {
       
        var complete = video.time() / video.duration();
        // console.log(this.stage, video.time());
        switch (this.stage) {
            case 0:
            video = vids[1];
            if(complete > .99){
                video.pause();
            }
            this.nextButton.display();
            if (this.nextButton.isInside()) {
                video = vids[2];
                video.loop();
                this.stage = 1;
            }
            break;
             case 1:
                if(complete > .99){
                    video.pause();
                }

                this.nextButton.display();
                this.prevButton.display();
                if (this.nextButton.isInside()) {
                    video = vids[3];
                    video.loop();
                    this.stage = 2;
                }
                if (this.prevButton.isInside()) {
                    video = vids[1];
                    video.loop();
                    this.stage = 0;
                }

                break;
                 case 2:
                  if(complete > .99){
                    video.pause();
                }
                this.prevButton.display();
                if (this.prevButton.isInside()) {
                    video = vids[2];
                    video.loop();
                    this.stage = 1;
                }
                break;

        }
       /* switch (this.stage) {
            case 0:

                if(video.time()>=15){
                     video.pause();
                     this.videoPaused=true;
                } else {
                    if(this.videoPaused) {
                        video.loop();
                        this.videoPaused = false;
                    }
                }

                this.nextButton.display();
                if (this.nextButton.isInside()) {
                    video.pause()
                    this.videoPaused=true;
                    video.time(16);
                    this.stage = 1;
                }
                break;
            case 1:
                if(video.time()<16) video.time(16);
                if(video.time()>=23){
                     video.pause();
                     this.videoPaused=true;
                } else {
                    if(this.videoPaused) {
                        video.loop();
                        this.videoPaused = false;
                    }
                }

                this.nextButton.display();
                this.prevButton.display();
                if (this.nextButton.isInside()) {
                    video.time(23);
                    this.stage = 2;
                }
                if (this.prevButton.isInside()) {
                    video.time(0);
                    this.stage = 0;
                }

                break;
            case 2:
                if(video.time()<26) video.time(26);
                if(complete>.99){
                     video.pause();
                     this.videoPaused=true;
                } else {
                    if(this.videoPaused) {
                        video.loop();
                        this.videoPaused = false;
                    }
                }

                this.prevButton.display();
                if (this.prevButton.isInside()) {
                    video.time(16);
                    this.stage = 1;
                }
                break;
            }*/
        }
    }
}

class vidButton {
    constructor(x, y, target, img) {
        this.img= img;

        this.reading;
        this.buttonState; // the current reading from the input pin
        this.lastButtonState = false; // the previous reading from the input pin
        this.lastDebounceTime = 0; // the last time the output pin was toggled
        this.debounceDelay = 1000;
        this.target=target;
        this.pos = createVector(x, y);
        this.cP = createVector(0, 0);
        this.sz = createVector(this.img.width, this.img.height);

    }
    display() {
        this.cP = cursorPosition;
       image(this.img,this.pos.x,this.pos.y)
       if(this.reading){
        fill(colorTheme)
        noStroke();
        rect(this.pos.x,this.pos.y, this.sz.x, this.sz.y)
        image(this.img,this.pos.x-10,this.pos.y-10)
        }
    }

    isInside() {
        if (this.cP.x > this.pos.x && this.cP.x < this.pos.x + this.sz.x && this.cP.y > this.pos.y && this.cP.y < this.pos.y + this.sz.y) {
            this.reading = true;
            if(this.target==3){          
                return true;
            } 
        } else {
            this.reading = false;
            if(this.target == 3) return false;

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