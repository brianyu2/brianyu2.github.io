function Game()
{
    var maxBallsDropped = 10;

    var keys;
    var keysMissed;
    var keyCombo;
    var keyScore;

    // take this in a local variable to allow easy access to
    // this instace from within local functions
    var me = this;

    this.enter = function()
    {
        textSize(12);
        textAlign(LEFT);
        initGame();
        song.play(2.8);
        setTimeout(function(){me.sceneManager.showScene( GameOver )}, 204000);
    };

    this.draw = function()
    {
        rect(0,647.5,1366,5);
        image( this.sceneManager.bkImage, 0, 0);
        displayKeys(keys);
        updateKeys(keys);
        displayStats();
    };

    this.keyPressed = function()
    {
        var ball = findHitBall(keys, key);
        if ( ball != null )
        {
            catchBall(ball);
        }
    };

    this.displayGlobalBalls = function()
    {
        displayKeys(keys);
    };

    this.getScore = function()
    {
        return keyScore;
    };

    function initGame()
    {
        keys = [];
        keysMissed = 0;
        keyCombo = 0;
        keyScore = 0;

        setTimeout(function(){addBall(keys);}, 300);
    }

    function catchBall(ball)
    {
        if ( keysMissed < maxBallsDropped )
        {
            keyScore += 100 - Math.round(Math.abs(ball.y-650));
            keyCombo++;
            initKey(ball);
        }
    }

    function displayKeys(arBalls)
    {
        for(var i = 0; i < arBalls.length; i++)
        {
            displayKey( arBalls[i] );
        }
    }

    function displayKey(ball)
    {
        fill(ball.color);
        ellipse(ball.x, ball.y, ball.size);

        if ( dist( mouseX, mouseY, ball.x, ball.y ) < ball.size / 2 )
        {
            noFill();
            ellipse(ball.x, ball.y, ball.size + 5);
        }
    }

    function displayStats()
    {
        fill("black");
        text( "Score: " + keyScore, 10, height - 60);
        text( "Combo: " + keyCombo, 10, height - 40);
        text( "Misses: " + keysMissed, 10, height - 20);
    }

    function findHitBall(arBalls, key)
    {
        for(var i = 0; i < arBalls.length; i++)
        {
            if (key === 'd') {
                var ball = arBalls[i];
                if (ball.x === 548 && (ball.y > 625 && ball.y < 675)) {
                    return ball;
                }
            } else if (key === 'f') {
                var ball = arBalls[i];
                if (ball.x === 638 && (ball.y > 625 && ball.y < 675)) {
                    return ball;
                }
            } else if (key === 'j') {
                var ball = arBalls[i];
                if (ball.x === 728 && (ball.y > 625 && ball.y < 675)) {
                    return ball;
                }
            } else if (key === 'k') {
                var ball = arBalls[i];
                if (ball.x === 818 && (ball.y > 625 && ball.y < 675)) {
                    return ball;
                }
            } else {
                return null;
            }
        }
        return null;
    }


    function updateKeys(arBalls)
    {
        for(var i = 0; i < arBalls.length; i++)
        {
            updateBall( arBalls[i] );
        }
    }


    function updateBall(ball)
    {
        ball.y += ball.size / 16.1;

        // test if hits the ground
        if ( ball.y > height )
        {
            keysMissed++;
            keyCombo = 0;
            if ( keysMissed >= maxBallsDropped )
            {
                song.stop();
                me.sceneManager.showScene( GameOver );
            }
            initKey2(ball);
        }
    }


    function addBall(arBalls)
    {
        var key = { x : 0, y : 0, color : "", size: 10 };
        initKey(key);
        var key2 = { x : 0, y : 0, color : "", size: 10 };
        initKey(key2);
        var key3 = { x : 0, y : 0, color : "", size: 10 };
        initKey(key3);
        var key4 = { x : 0, y : 0, color : "", size: 10 };
        initKey(key4);
        var key5 = { x : 0, y : 0, color : "", size: 10 };
        initKey(key5);
        var key6 = { x : 0, y : 0, color : "", size: 10 };
        initKey(key6);
        arBalls.push(key);
        key2.y -= 100;
        arBalls.push(key2);
        key3.y -= 200;
        arBalls.push(key3);
        key4.y -= 300;
        arBalls.push(key4);
        key5.y -= 400;
        arBalls.push(key5);
        key6.y -= 500;
        arBalls.push(key6);
    }


    function initKey(key)
    {
        key.x = random([548, 638, 728, 818]);
        key.y = 10;
        key.color = "orange";
        key.size = 60;
    }

    function initKey2(key)
    {
        key.x = random([548, 638, 728, 818]);
        key.y = 110;
        key.color = "orange";
        key.size = 60;
    }
}
