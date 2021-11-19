class StandBy {
    constructor() {
        this.button = new StartButton(width / 2 - 180, height / 2 + 90, 1, enterButtonInici ,enterButtonHoverInici );
        this.state = 0;
        this.cursor = new Cursor();
        this.video = intro1;
       
    }

    display(cP) {

        image( this.video,0,0)
        if(tracking){
           this.state = 1; 
        }
        if(noUser){
           this.state = 0;
        }
        switch (this.state){
            case 0:
                 this.video  = intro1;     
            break;
            case 1:
                this.video = intro2;
                this.button.activated(cP.x, cP.y)
                this.button.display();
                 if (this.button.reading) this.button.hover();
            break;
        }
        
    }
    
}