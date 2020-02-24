let playerGrid, fallingPiece, ghostPiece;
let ghostMode = true;

const width = 10;
const height = 20;

function setup() {
    playerGrid = new PlayerGrid(width, height);
    let totalWidth = playerGrid.cellSize * width + playerGrid.borderSize*3;
    let totalHeight = playerGrid.cellSize * height + playerGrid.borderSize*3;
    createCanvas(totalWidth, totalHeight);
    spawnNewPiece();
}

let prev = 0;
function draw() {
    let curr = millis();
    let delta = curr - prev;
    prev = curr;
    fallingPiece.update(delta);
    if (fallingPiece.timeToFall()) {
        fallingPiece.resetBuffer();
        fallingPiece.moveDown();
        if (!playerGrid.isValid(fallingPiece)) {
            fallingPiece.moveUp();
            spawnNewPiece();
        }
    }
    ghostPiece.copy(fallingPiece);
    hardDrop(ghostPiece, playerGrid);
    playerGrid.clearLines();
    background(0);
    playerGrid.show();
    if (ghostMode) ghostPiece.show();
    fallingPiece.show();
}

function spawnNewPiece() {
    if (fallingPiece) {
        playerGrid.addToGrid(fallingPiece);
    }
    const pieces = ['O', 'J', 'L', 'S', 'Z', 'T', 'I'];
    const choice = random(pieces);
    fallingPiece = new Piece(choice, playerGrid);
    ghostPiece = new Piece(choice, playerGrid);
    ghostPiece.isghost = true;
    ghostPiece.cells = fallingPiece.cells;
    redraw();
}

function hardDrop(piece, playfield) {
    while (playfield.isValid(piece)) {
        piece.moveDown();
    }
    piece.moveUp();
}

function mouseMoved() {
    if (movedX / 10000 < 0) {
        fallingPiece.moveLeft();
        if (!playerGrid.isValid(fallingPiece))
            fallingPiece.moveRight();
    } else {
        fallingPiece.moveRight();
        if (!playerGrid.isValid(fallingPiece))
            fallingPiece.moveLeft();
    }
}

function mouseClicked() {
    hardDrop(fallingPiece, playerGrid);
    spawnNewPiece();
}

function keyPressed() {
    switch (key.toLowerCase()) {
        case ' ':
            hardDrop(fallingPiece, playerGrid);
            spawnNewPiece();
            break;
        case 'r':
            spawnNewPiece();
            playerGrid.resetGrid();
            break;
        case 'z':
            fallingPiece.rotateCCW();
            if (!playerGrid.isValid(fallingPiece))
                fallingPiece.rotateCW();
            break;
        case 'x':
            fallingPiece.rotateCW();
            if (!playerGrid.isValid(fallingPiece))
                fallingPiece.rotateCCW();
            break;
    }
    switch (keyCode) {
        case UP_ARROW:
            fallingPiece.rotateCW();
            if (!playerGrid.isValid(fallingPiece))
                fallingPiece.rotateCCW();
            break;
        case CONTROL:
            fallingPiece.rotateCCW();
            if (!playerGrid.isValid(fallingPiece))
                fallingPiece.rotateCW();
            break;
    }
}

console.log('keyboard')
document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 40:
            fallingPiece.moveDown();
            if (!playerGrid.isValid(fallingPiece))
                fallingPiece.moveUp();
            else
                fallingPiece.resetBuffer();
            break;
        case 37:
            fallingPiece.moveLeft();
            if (!playerGrid.isValid(fallingPiece))
                fallingPiece.moveRight();
            break;
        case 39:
            fallingPiece.moveRight();
            if (!playerGrid.isValid(fallingPiece))
                fallingPiece.moveLeft();
            break;
    }
});