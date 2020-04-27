function Game() {
    var maxRowMisses = 5;

    var keys;
    var keysMissed;
    var keyCombo;
    var keyScore;
    var multiplier;
    var failCount;
    var maxCombo;
    var accuracy;
    var specialKey;

    // take this in a local variable to allow easy access to
    // this instace from within local functions
    var me = this;

    this.enter = function () {
        textSize(18);
        textAlign(LEFT);
        initGame();
        song.play(2.8);
        setTimeout(function () {
            if (keyCombo > maxCombo) {
                maxCombo = keyCombo;
            }
            me.sceneManager.showScene(GameOver)
        }, 204000);
    };

    this.draw = function () {
        rect(0, 647.5, 1366, 5);
        rect(408, 0, 10, 768);
        rect(498, 0, 10, 768);
        rect(588, 0, 10, 768);
        rect(678, 0, 10, 768);
        rect(768, 0, 10, 768);
        rect(858, 0, 10, 768);
        rect(948, 0, 10, 768);
        text("S", 453, height - 80);
        text("D", 543, height - 80);
        text("F", 633, height - 80);
        text("J", 723, height - 80);
        text("K", 813, height - 80);
        text("L", 903, height - 80);
        image(this.sceneManager.bkImage, 0, 0);
        displayKeys(keys);
        updateKeys(keys);
        displayStats();
    };

    this.keyPressed = function () {
        var ball = findHitBall(keys, key);
        if (ball != null) {
            catchBall(ball);
        }
    };

    this.displayGlobalBalls = function () {
        displayKeys(keys);
    };

    this.getScore = function () {
        return keyScore;
    };

    this.getCombo = function () {
        return maxCombo;
    };

    this.getMisses = function () {
        return keysMissed;
    };

    function initGame() {
        keys = [];
        keysMissed = 0;
        keyCombo = 0;
        keyScore = 0;
        multiplier = 1;
        failCount = 0;
        maxCombo = 0;

        setTimeout(function () {
            addBall(keys);
        }, 300);
        setTimeout(function () {
            addBall(specialKey);
        }, 1200);
    }

    function catchBall(ball) {
        if (failCount < maxRowMisses) {
            if (keyCombo > 40) {
                multiplier = 5;
            } else if (keyCombo > 30) {
                multiplier = 4;
            } else if (keyCombo > 20) {
                multiplier = 3;
            } else if (keyCombo > 10) {
                multiplier = 2;
            } else {
                multiplier = 1;
            }
            keyScore += (100 - Math.round(Math.abs(ball.y - 650))) * multiplier;
            keyCombo++;
            if (failCount === 0) {
                failCount = 0;
            } else {
                failCount--;
            }
            if (ball.x < 500 || ball.x > 900) {
                initSpecialKey(ball);
            } else {
                initKey(ball);
            }
        }
    }

    function displayKeys(arBalls) {
        for (var i = 0; i < arBalls.length; i++) {
            displayKey(arBalls[i]);
        }
    }

    function displayKey(ball) {
        fill(ball.color);
        ellipse(ball.x, ball.y, ball.size);

        if (dist(mouseX, mouseY, ball.x, ball.y) < ball.size / 2) {
            noFill();
            ellipse(ball.x, ball.y, ball.size + 5);
        }
    }

    function displayStats() {
        if (accuracy === "Perfect!!") {
            fill("Yellow");
            text(accuracy, width/2, 250);
        } else if (accuracy === "Great!") {
            fill("Green");
            text(accuracy, width/2, 250);
        } else if (accuracy === "Good") {
            fill("Blue");
            text(accuracy, width/2, 250);
        } else if (accuracy === "Miss") {
            fill("Red");
            text(accuracy, width/2, 250);
        }
        fill("black");
        text("Score: " + keyScore, 10, height - 80);
        text("Multiplier: " + multiplier + "x", 10, height - 60)
        text("Combo: x" + keyCombo, 10, height - 40);
        text("Misses: x" + keysMissed, 10, height - 20);
    }

    function findHitBall(arBalls, key) {
        for (var i = 0; i < arBalls.length; i++) {
            if (key === 's') {
                var ball = arBalls[i];
                if (ball.x === 458 && (ball.y > 625 && ball.y < 675)) {
                    if (ball.y > 645 && ball.y < 655) {
                        accuracy = "Perfect!!";
                    } else if (ball.y > 635 && ball.y < 665) {
                        accuracy = "Great!";
                    } else {
                        accuracy = "Good";
                    }
                    return ball;
                }
            } else if (key === 'd') {
                var ball = arBalls[i];
                if (ball.x === 548 && (ball.y > 625 && ball.y < 675)) {
                    if (ball.y > 645 && ball.y < 655) {
                        accuracy = "Perfect!!";
                    } else if (ball.y > 635 && ball.y < 665) {
                        accuracy = "Great!";
                    } else {
                        accuracy = "Good";
                    }
                    return ball;
                }
            } else if (key === 'f') {
                var ball = arBalls[i];
                if (ball.x === 638 && (ball.y > 625 && ball.y < 675)) {
                    if (ball.y > 645 && ball.y < 655) {
                        accuracy = "Perfect!!";
                    } else if (ball.y > 635 && ball.y < 665) {
                        accuracy = "Great!";
                    } else {
                        accuracy = "Good";
                    }
                    return ball;
                }
            } else if (key === 'j') {
                var ball = arBalls[i];
                if (ball.x === 728 && (ball.y > 625 && ball.y < 675)) {
                    if (ball.y > 645 && ball.y < 655) {
                        accuracy = "Perfect!!";
                    } else if (ball.y > 635 && ball.y < 665) {
                        accuracy = "Great!";
                    } else {
                        accuracy = "Good";
                    }
                    return ball;
                }
            } else if (key === 'k') {
                var ball = arBalls[i];
                if (ball.x === 818 && (ball.y > 625 && ball.y < 675)) {
                    if (ball.y > 645 && ball.y < 655) {
                        accuracy = "Perfect!!";
                    } else if (ball.y > 635 && ball.y < 665) {
                        accuracy = "Great!";
                    } else {
                        accuracy = "Good";
                    }
                    return ball;
                }
            } else if (key === 'l') {
                var ball = arBalls[i];
                if (ball.x === 908 && (ball.y > 625 && ball.y < 675)) {
                    if (ball.y > 645 && ball.y < 655) {
                        accuracy = "Perfect!!";
                    } else if (ball.y > 635 && ball.y < 665) {
                        accuracy = "Great!";
                    } else {
                        accuracy = "Good";
                    }
                    return ball;
                }
            } else {
                return null;
            }
        }
        return null;
    }


    function updateKeys(arBalls) {
        for (var i = 0; i < arBalls.length; i++) {
            updateBall(arBalls[i]);
        }
    }


    function updateBall(ball) {
        ball.y += ball.size / 16.18;

        // test if hits the ground
        if (ball.y > height) {
            keysMissed++;
            failCount++;
            accuracy = "Miss";
            if (keyCombo > maxCombo) {
                maxCombo = keyCombo;
            }
            keyCombo = 0;
            if (failCount >= maxRowMisses) {
                song.stop();
                me.sceneManager.showScene(GameOver);
            }
            if (ball.x < 500 || ball.x > 900) {
                initSpecialKey(ball);
            } else {
                initKey2(ball);
            }
        }
    }


    function addBall(arBalls) {
        var key = {x: 0, y: 0, color: "", size: 10};
        initKey(key);
        var key2 = {x: 0, y: 0, color: "", size: 10};
        initKey(key2);
        var key3 = {x: 0, y: 0, color: "", size: 10};
        initKey(key3);
        var key4 = {x: 0, y: 0, color: "", size: 10};
        initKey(key4);
        var key5 = {x: 0, y: 0, color: "", size: 10};
        initKey(key5);
        var key6 = {x: 0, y: 0, color: "", size: 10};
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
        var specialKey = {x: 0, y: 0, color: "", size: 10};
        initSpecialKey(specialKey);
        specialKey.y -= 400;
        arBalls.push(specialKey);
    }


    function initKey(key) {
        key.x = random([548, 638, 728, 818]);
        key.y = 10;
        key.color = "orange";
        key.size = 60;
    }

    function initKey2(key) {
        key.x = random([548, 638, 728, 818]);
        key.y = 110;
        key.color = "orange";
        key.size = 60;
    }

    function initSpecialKey(key) {
        key.x = random([458, 908]);
        key.y = 10;
        key.color = "blue";
        key.size = 60;
    }
}
