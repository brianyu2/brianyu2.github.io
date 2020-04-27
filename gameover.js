function GameOver()
{
    var oGame;

    this.setup = function()
    {
        // find a different scene using the SceneManager
        oGame = this.sceneManager.findScene( Game ).oScene;
    }

    this.draw = function()
    {
        // read the injected bkImage property
        image( this.sceneManager.bkImage, 0, 0);

        // invoke a method from a different scene

        oGame.displayGlobalBalls();
        if (oGame.getScore() > 200000 && (oGame.getMisses() === 0)) {
            textSize( 60);
            fill("yellow");
            text("SS", width / 2, 250);
        } else if (oGame.getScore() > 200000) {
            textSize( 60);
            fill("yellow");
            text("S", width / 2, 250);

        } else if (oGame.getScore() > 160000) {
            textSize( 60);
            fill("Green");
            text("A", width / 2, 250);

        } else if (oGame.getScore() > 130000) {
            textSize( 60);
            fill("Blue");
            text("B", width / 2, 250);

        } else if (oGame.getScore() > 100000) {
            textSize( 60);
            fill("Purple");
            text("C", width / 2, 250);

        } else if (oGame.getScore() > 50000) {
            textSize( 60);
            fill("Red");
            text("D", width / 2, 250);

        } else {
            textSize( 60);
            fill("Red");
            text("F", width / 2, 250);
        }

        fill("black");
        textSize( map( sin(frameCount * 0.1), 0, 1, 24, 32) );
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);

        textSize(16);
        text("Score: " + oGame.getScore(), width / 2, height / 2 + 20);
        text("Max Combo: " + oGame.getCombo(), width / 2, height / 2 + 40);
        if (oGame.getMisses === 0) {
            text("Full Combo!", width / 2, height / 2 + 60);
        }
        text("Click to restart game...", width / 2, height - 20);
    };

    this.mousePressed = function()
    {
        this.sceneManager.showScene( Intro );
    }
}
