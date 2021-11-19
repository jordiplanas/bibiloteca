var screen = 0;
var standBy, menu, txt;
var cursor;
var cursorPosition;
var cursorsIsActive = false;
var activityTimmer;
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
var colorTheme = '#73a5cf';
var menuButtons = [];
var seguent,anterior,inici,context;
var pops=[];
var intro1, intro2;
var vids0 = [];
var vids1 = [];
var vids2 = [];
var vids3 = [];
var vids4 = [];
var vids5 = [];
var vids6 = [];
var vids7 = [];
var vids8 = [];
var vids9 = [];
function preload() {
    console.log("preload");
    
     for (var i = 1; i <4; i++) {
        vids0[i]= createVideo("assets/videos/0_"+i+".mp4");
        vids0[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids1[i]= createVideo("assets/videos/1_"+i+".mp4");
        vids1[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids2[i]= createVideo("assets/videos/2_"+i+".mp4");
        vids2[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids3[i]= createVideo("assets/videos/3_"+i+".mp4");
        vids3[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids4[i]= createVideo("assets/videos/4_"+i+".mp4");
        vids4[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids5[i]= createVideo("assets/videos/5_"+i+".mp4");
        vids5[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids6[i]= createVideo("assets/videos/6_"+i+".mp4");
        vids6[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids7[i]= createVideo("assets/videos/7_"+i+".mp4");
        vids7[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids8[i]= createVideo("assets/videos/8_"+i+".mp4");
        vids8[i].hide()
     }
        for (var i = 1; i <4; i++) {
        vids9[i]= createVideo("assets/videos/9_"+i+".mp4");
        vids9[i].hide()
     }


    for (var i = 0; i <10; i++) {
       menuButtons[i] = loadImage("assets/menuButtons_" + i + ".png")
       pops[i] = loadImage("assets/pop_" + i + ".png")
        //vids[i] = createVideo("assets/vid_"+i+".mp4",onVideoLoad);
    }
 
    intro1 = createVideo("assets/intro1.mp4");
    intro2= createVideo("assets/intro2.mp4");

    bk= loadImage('assets/bk.jpg');
     enterButtonInici= loadImage("assets/entrarInici.png");
    enterButtonHoverInici= loadImage("assets/entrariniciHover.png");
    enterButton = loadImage("assets/entrar.png");
    enterButtonHover= loadImage("assets/entrarHover.png");
    seguent= loadImage('assets/seguent.jpg');
    anterior= loadImage('assets/anterior.jpg');
    context= loadImage('assets/context.jpg');
    inici= loadImage('assets/inici.jpg');


}

function onVideoLoad() {
    allVideos += 1;
    vids0[allVideos - 1].hide();
   // console.log("allVideos", allVideos);
    /*if(allVideos === 10) {
        currentVideo = 0;
        for (var i = 0; i < vids.length; i++) {
            //vids[i].hide();
        }
        videosLoaded = true;
    }*/

}


function setup() {
    createCanvas(1920, 1080);
    //frameRate(25);
    cursor = new Cursor();
    cursorPosition = createVector(0, 0);
    standBy = new StandBy();
    menu = new Menu(bk, menuButtons, enterButton , enterButtonHover);
    videoText = new videoText(seguent,anterior,inici,context);
    activityTimmer = new Timer(3000);
    intro1.hide();
    intro2.hide();
    intro2.loop();
   intro1.loop();


}

function draw() {
    console.log(screen)
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
                //screen = 0; //loop video intro //standby timer start
            }
        }
    }
});



