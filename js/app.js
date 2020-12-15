let cursor;

function setup() {
    createCanvas(500, 500);
    cursor = new Cursor();
}

function draw() {

}

var controller = Leap.loop(function(frame) {
    if (frame.hands.length > 0) {
        let hand = frame.hands[0];
        var position = createVector(hand.palmPosition[0] + width / 2, height - hand.palmPosition[1]);
        cursor.track(position, 0, 0)
    } else {}
});