class Menu {
    constructor(bk, img, button, hoverButton) {
        this.panels=[];
        this.positions = [
        {
            x:50,
            y:40
        },
          {
            x: 216,
            y:938
        },
          {
            x: 402,
            y:132
        },
          {
            x: 596,
            y:869
        },
          {
            x: 788,
            y:124
        },
          {
            x: 976,
            y:894
        },
          {
            x: 1176,
            y:112
        },
          {
            x: 1322,
            y:960
        },
          {
            x:1514,
            y:92
        },
          {
            x: 1644,
            y:926
        }
          ]
        for(var i = 0; i<img.length; i++){
            if(i%2==1){
            this.panels[i] = new MenuButton(this.positions[i].x+20,this.positions[i].y-img[i].height*.67, i, img[i], button, hoverButton); 
            }else{
             this.panels[i] = new MenuButton(this.positions[i].x+20,this.positions[i].y, i, img[i], button, hoverButton);    
            }
        }
        
        this.bkImg = bk;
    }

    display() {
        cursorsIsActive = true;
        image(this.bkImg, 0, 0, width, height)
        for(var i = 0; i<this.panels.length; i++){
           this.panels[i].display(cursorPosition)
        }
    }

}

class MenuButton {

    constructor(x, y, target, img, button,buttonHover) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.target = target;
        this.cP = createVector(0, 0);
        this.button = button;
        this.maxSz = createVector(this.img.width, this.img.height);
        this.minSz = createVector(this.img.width * 0.67, this.img.height * 0.67);
        this.sz = createVector(this.minSz.x, this.minSz.y);
        this.grow = 0;
        this.subBut = new subButton(button,buttonHover, target);
    }

    display(cP) {
        this.cP = cP;
        image(this.img, this.x, this.y,this.sz.x,this.sz.y)
        this.isActivated();
    }

    isActivated() {

        if (this.cP.x > this.x && this.cP.x < this.x + this.sz.x && this.cP.y > this.y && this.cP.y < this.y + this.sz.y + this.button.height/1.7 + 40) {
            if (this.sz.x <= this.maxSz.x) {
                this.sz.x += 6;
                this.sz.y += 6;
                if(this.target%2==1){
                    console.log("movi")
                    this.y -= 6;
                }
            }
            if (this.sz.x >= this.maxSz.x) {
                this.subBut.display(this.cP, this.x, this.y + this.img.height + 20)
            }
        } else {
            if (this.sz.x > this.minSz.x) {
                this.sz.x -= 6;
                this.sz.y -= 6;
                 if(this.target %2 ==1){
                    this.y+=6;
                }
            }

        }

    }

}

class subButton {
    constructor(img, imgHover, target) {
        this.img = img;
        this.imgHover = imgHover;
        this.pos = createVector(0, 0);
        this.sz = createVector(0, 0);
        this.target = target;
        this.cP = createVector(0, 0);
        this.t = 0;
    }

    display(cP, x, y) {
        this.cP = cP;
        this.pos.x = x;
        this.pos.y = y;
       
        image(this.img, this.pos.x, this.pos.y, this.img.width / 1.7, this.img.height / 1.7)
        this.isActivated();
    }

    hover() {
        image(this.imgHover, this.pos.x, this.pos.y, this.img.width/ 1.7, this.img.height/ 1.7);
    }

    isActivated() {
        if (this.cP.x > this.pos.x && this.cP.x < this.pos.x + this.img.width && this.cP.y > this.pos.y && this.cP.y < this.pos.y + this.img.height) {
            console.log("insideSub")
            this.hover();
            this.t++;
            if (this.t > 70) {
                currentVideo = this.target;
                videoText.stage=0;
                video = vids[currentVideo];
                video.time(0);
                video.loop();
                screen = 2;
                this.t = 0;
            }
        } else {
            this.t = 0;
        }
    }
}