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