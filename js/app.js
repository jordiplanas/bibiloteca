let screen = 0;
let standBy, menu, txt;
let cursor;
let cursorPosition;
let cursorsIsActive = false;
let activityTimmer;
var sbImages = [];
var fons;
var butImg;
var subImg;
var tracking = false;
var currentVideo;
var vids = [];

function preload() {
    console.log("preload");
    for (var i = 0; i <= 6; i++) {
        sbImages[i] = loadImage("assets/b" + i + ".png")
    }
    vids[0] = createVideo("assets/0a.mp4");
    vids[1] = createVideo("assets/0b.mp4");
    vids[2] = createVideo("assets/0c.mp4", onVideoLoad);

    fons = loadImage('assets/fons.jpg')
    butImg = loadImage('assets/s0.png')
    subImg = loadImage('assets/sub.png')

}

function onVideoLoad() {
    currentVideo = vids[0];
    for (var i = 0; i < vids.length; i++) {
        vids[i].hide();
    }

}

function setup() {
    createCanvas(1920, 1080);
    cursor = new Cursor();
    cursorPosition = createVector(0, 0);
    standBy = new StandBy();
    menu = new Menu(fons, butImg, subImg);
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
        cursorPosition.x = map(hand.palmPosition[0], -170, 170, 0, width);
        cursorPosition.y = map(hand.palmPosition[1], 135, 380, height, 0);
        // activityTimmer.start();

    } else {

        tracking = false;
        /*if (activityTimmer.isFinished() && screen != 0) {
            console.log("back to standby")
                // screen = 0;
        }*/
    }
});