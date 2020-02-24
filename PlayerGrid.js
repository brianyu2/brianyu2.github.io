class PlayerGrid {
    constructor(w, h) {
        this.foreground = [0];
        this.background = [170];
        this.cols = w;
        this.rows = h;
        this.grid = [];
        this.lines = 0;
        this.score = 0;
        this.level = 1;
        this.multiplier = 0;
        this.resetGrid();
        this.cellSize = 21;
        this.borderSize = 3;
        this.gridlines = false;
    }

    addToGrid(piece) {
        for (let row = 0; row < piece.size; row++) {
            for (let col = 0; col < piece.size; col++) {
                if (piece.cells[row][col] != null) {
                    let gridRow = piece.y + row;
                    let gridCol = piece.x + col;
                    this.grid[gridRow][gridCol] =
                        piece.cells[row][col];
                }
            }
        }
    }

    clearLines() {
        for (let row = this.rows-1; row >= 0; row--) {
            if (!this.grid[row].includes(this.foreground)) {
                this.grid.splice(row, 1)
                this.grid.unshift(new Array(this.cols).fill(this.foreground));
                this.lines++;
                this.multiplier++;
                document.getElementById("lines").innerHTML = "Lines Cleared: " + this.lines;
                if (this.lines % 10 === 0) {
                    this.level++;
                    document.getElementById("level").innerHTML = "Level: " + this.level;
                }
            }
        }
        if (this.multiplier >= 1) {
            this.score += this.multiplier * 40;
        } else if (this.multiplier >= 2) {
            this.score += this.multiplier * 20;
        } else if (this.multiplier >= 3) {
            this.score += this.multiplier * 15;
        } else if (this.multiplier >= 4) {
            this.score += this.multiplier * 10;
        }
        this.multiplier = 0;
        document.getElementById("score").innerHTML = "Score: " + this.score;
    }

    isValid(piece) {
        for (let row = 0; row < piece.size; row++) {
            for (let col = 0; col < piece.size; col++) {
                if (piece.cells[row][col] != null) {
                    let gridRow = piece.y + row;
                    let gridCol = piece.x + col;
                    if (gridRow < 0 || gridRow >= this.rows ||
                        gridCol < 0 || gridCol >= this.cols ||
                        this.grid[gridRow][gridCol] !== this.foreground)
                        return false;
                }
            }
        }
        return true;
    }

    resetGrid() {
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = new Array(this.cols).fill(this.foreground);
        }
        this.lines = 0;
        this.score = 0;
        this.multiplier = 0;
        document.getElementById("lines").innerHTML = "Lines Cleared: " + this.lines;
        document.getElementById("score").innerHTML = "Score: " + this.score;
    }

    show() {
        let bs = this.borderSize;
        let cs = this.cellSize;
        if (this.gridlines) {
            fill(this.background);
        } else {
            fill(this.foreground);
        }
        stroke(this.background);
        let offset = floor(bs / 2);
        rect(offset, offset, cs * this.cols + bs - 1, cs * this.rows + bs - 1);
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                let offset = this.borderSize;
                let cs = this.cellSize;
                fill(this.grid[row][col]);
                noStroke();
                rect(cs * col + offset, cs * row + offset, cs - 1, cs - 1);
            }
        }
    }
}