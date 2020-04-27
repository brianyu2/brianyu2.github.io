var bkImage, song;

function preload()
{
    bkImage = loadImage("images/background.png");
    song = loadSound('music/believer.mp3');
}

function setup()
{
    createCanvas(bkImage.width, bkImage.height);
    var mgr = new SceneManager();
    mgr.bkImage = bkImage; // inject bkImage property
    mgr.wire();
    mgr.showScene( Intro );
}