class Txt {

    constructor() {
        this.video = createVideo("../assets/0.mp4", this.set());
    }
    set() {
        console.log("charging..." + this.video)
            //this.video.hide();
        this.video.play();

    }

    display() {
        this.video.play();
        //

    }


}