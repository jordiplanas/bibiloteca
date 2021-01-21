let screen = 2;
let standBy, menu, txt;
let cursor;
let cursorPosition;
let cursorsIsActive = false;
let activityTimmer;
var sbImages = [];
var tracking = false;
var currentVideo;

function preload() {
    console.log("preload");
    for (var i = 0; i <= 6; i++) {
        sbImages[i] = loadImage("assets/b" + i + ".png")
    }
    currentVideo = createVideo("assets/0.mov", onVideoLoad); //42.28
}

function onVideoLoad() {
    var vid = document.getElementsByTagName('video');
    vid.muted = true;
    currentVideo.hide();
    currentVideo.play();
}

function setup() {
    createCanvas(1920, 1080);
    cursor = new Cursor();
    cursorPosition = createVector(0, 0);
    standBy = new StandBy();
    menu = new Menu();
    txt = new Txt();
    activityTimmer = new Timer(3000);

}

function draw() {

    switch (screen) {
        case 0:
            standBy.display(cursorPosition);
            break;
        case 1:
            menu.display();
            break;
        case 2:
            txt.display();
            break;
    }


    if (cursorsIsActive) cursor.display(cursorPosition);
}

var controller = Leap.loop(function(frame) {
    if (frame.hands.length > 0) {
        tracking = true;
        let hand = frame.hands[0];
        let position = createVector(hand.palmPosition[0] + width / 2, height - hand.palmPosition[1]);
        console.log(position)
            //cursorPosition.x = position.x;
            //cursorPosition.y = position.y;
        cursorPosition.x = map(position.x, 700, 900, 0, width);
        cursorPosition.y = map(position.y, 500, 900, 0, height);
        // activityTimmer.start();

    } else {

        tracking = false;
        /*if (activityTimmer.isFinished() && screen != 0) {
            console.log("back to standby")
                // screen = 0;
        }*/
    }
});