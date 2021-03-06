function Intro()
{
    this.draw = function()
    {
        image( this.sceneManager.bkImage, 0, 0);
        drawIntroScreen();
    };

    this.keyPressed = function()
    {
            this.sceneManager.showScene( Game);
    };

    function drawIntroScreen()
    {
        textSize(36);
        textAlign(CENTER);
        fill("yellow");
        text("Keyboard Hero", width / 2, 50);

        fill("orange");
        textSize(16);

        text("Press any key to start the game!", width / 2, height / 2 - 30);
        text("Use keys 'S, D, F, J, K, L' to play!", width / 2, height / 2 - 60);

        if ( Math.floor(frameCount / 30) % 2 === 0 )
        {
            text("Time it to the beat!", width / 2, height / 2 - 90);
        }
    }
}
