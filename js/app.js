let screen = 1;
let txt;
let standBy;
let menu;
let cursor;
let cursorPosition;
let cursorsIsActive = false;
let activityTimmer;

function setup() {
    createCanvas(500, 500);
    cursor = new Cursor();
    cursorPosition = createVector(0, 0);
    standBy = new StandBy();
    menu = new Menu();
    activityTimmer = new Timer(3000);
}

function draw() {
    console.log(screen);
    switch (screen) {
        case 0:
            standBy.display(cursorPosition);
            break;
        case 1:
            menu.display();
            break;
        case 2:
            background(0);
            //text animació
            break;
    }

    if (cursorsIsActive) cursor.display(cursorPosition);
}

var controller = Leap.loop(function(frame) {
    if (frame.hands.length > 0) {
        let hand = frame.hands[0];
        let position = createVector(hand.palmPosition[0] + width / 2, height - hand.palmPosition[1]);
        cursorPosition = position;
        activityTimmer.start();

    } else {
        if (activityTimmer.isFinished() && screen != 0) {
            console.log("back to standby")
            screen = 0;

        }
    }
});