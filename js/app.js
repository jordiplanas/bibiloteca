let position;
var controller = Leap.loop(function(frame) {
    if (frame.hands.length > 0) {
        var hand = frame.hands[0];
        position = hand.palmPosition;
    } else {
        position = null;
    }
});

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    if (position != null) ellipse(position[0], 100, 100, 100)
}