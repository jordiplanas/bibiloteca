let screen = 0;
let standBy;
let menu;
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
    currentVideo = createVideo("assets/0.mov");

}

function setup() {

    createCanvas(1920, 1080);
    cursor = new Cursor();
    cursorPosition = createVector(0, 0);
    standBy = new StandBy();
    menu = new Menu();
    activityTimmer = new Timer(3000);



}

function draw() {

    switch (screen) {
        case 0:
            standBy.display(cursorPosition);
            break;
        case 1:
            menu.display(cursorPosition);
            break;
        case 2:


            break;
    }


    if (cursorsIsActive) cursor.display(cursorPosition);
}

var controller = Leap.loop(function(frame) {
    if (frame.hands.length > 0) {
        tracking = true;
        let hand = frame.hands[0];
        let position = createVector(hand.palmPosition[0] + width / 2, height - hand.palmPosition[1]);
        cursorPosition.x = map(position.x, 600, 1200, 0, width);
        cursorPosition.y = map(position.y, 400, 1000, 0, height);
        // activityTimmer.start();

    } else {

        tracking = false;
        /*if (activityTimmer.isFinished() && screen != 0) {
            console.log("back to standby")
                // screen = 0;
        }*/
    }
});

function mousePressed() {
    currentVideo.play();
}