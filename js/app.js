var screen = 1;
var standBy, menu, txt;
var cursor;
var cursorPosition;
var cursorsIsActive = false;
var activityTimmer;
var sbImages = [];
var bk;
var enterButton, enterButtonHover;
var subImg, subHover;
var tracking = false;
var currentVideo=0;
var vids = [];
var video;
var allVideos = 0;
var videosLoaded = false;
var noUser = true;
var colorTheme = '#0000FF';
var menuButtons = [];
var seguent,anterior,inici,context;
var pops=[];
var videoIntro;
function preload() {
    console.log("preload");
    for (var i = 0; i <= 6; i++) {
        sbImages[i] = loadImage("assets/b" + i + ".png")
    }
    for (var i = 0; i <10; i++) {
       menuButtons[i] = loadImage("assets/menuButtons_" + i + ".png")
       pops[i] = loadImage("assets/pop_" + i + ".png")
        vids[i] = createVideo("assets/vid_"+i+".mp4",onVideoLoad);
    }
 
    videoIntro = createVideo("assets/intro.mp4");

    bk= loadImage('assets/bk.jpg');
    enterButton = loadImage("assets/enter.png");
    enterButtonHover= loadImage("assets/enterHover.png");
    seguent= loadImage('assets/seguent.jpg');
    anterior= loadImage('assets/anterior.jpg');
    context= loadImage('assets/context.jpg');
    inici= loadImage('assets/inici.jpg');


}

function onVideoLoad() {
    allVideos += 1;
    vids[allVideos - 1].hide();
   // console.log("allVideos", allVideos);
    if(allVideos === 10) {
        currentVideo = 0;
        for (var i = 0; i < vids.length; i++) {
            //vids[i].hide();
        }
        videosLoaded = true;
    }

}

function setup() {
    createCanvas(1920, 1080);
    cursor = new Cursor();
    cursorPosition = createVector(0, 0);
    standBy = new StandBy();
    menu = new Menu(bk, menuButtons, enterButton , enterButtonHover);
    videoText = new videoText(seguent,anterior,inici,context);
    activityTimmer = new Timer(3000);
    videoIntro.hide();
    videoIntro.loop();

}

function draw() {
    clear();
    switch (screen) {
        case 0:
            standBy.display(cursorPosition);
            break;
        case 1:
            menu.display();
            break;
        case 2:
            videoText.display();
            break;
    }


    if (cursorsIsActive) cursor.display(cursorPosition);
}

var controller = Leap.loop(function(frame) {
    if (frame.hands.length > 0) {
        tracking = true;
        noUser = false;
        let hand = frame.hands[0];
        cursorPosition.x = map(hand.palmPosition[0], -170, 170, 0, width);
        cursorPosition.y = map(hand.palmPosition[2], -150, 150, 0, height); // canivar a eix Z
        console.log("trackin");
    } else {
         console.log("No trackin");
        if (tracking) activityTimmer.start();
        tracking = false;
        if (activityTimmer && activityTimmer.isFinished()) {
            noUser = true;
            if (screen != 0) {
                console.log("back to standby");
                //screen = 0; loop video intro //standby timer start
            }
        }
    }
});