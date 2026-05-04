const column = 10;
const row = 20;
let board = [];
let currentShape;
let currentColor;




// Shapes
let pieces = [
    [[1,1,1,1]], // | piece
    [[1,1],[1,1]], // ■ piece
    [[0,1,0],[1,1,1]], // T piece
    [[1,0,0],[1,1,1]], // L piece
    [[0,0,1],[1,1,1]], // ⅃ piece
    [[0,1,1],[1,1,0]], // S piece
    [[1,1,0],[0,1,1]]  // Z piece
];

// Colors
const colors = ["cyan", "yellow", "purple", "orange", "blue", "green", "red"];

let grid = document.createElement(`table`);




function createBoard() {
    let grid = document.createElement(`table`);
    grid.style.borderCollapse = "collapse";
    grid.style.backgroundColor = "black"
     

    for (let r = 0; r < row; r++) {
        let tableRow = document.createElement(`tr`);
        let rowArray = []; 
        
        for (let c = 0; c < column; c++) {
            let cell = new Cell(c, r);
            rowArray.push(cell); 
            tableRow.appendChild(cell.td);
        }
        board.push(rowArray); 
        grid.appendChild(tableRow);
    }
    document.body.appendChild(grid);
}



class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.td = this.generateCellDiv(); 
    } 
    
    generateCellDiv() {
        let td = document.createElement(`td`);


        // Slightly smaller cells so a height of 20 fits on screen
        td.style.width = "15px";
        td.style.height = "15px"; 
        td.style.backgroundColor = "transparent";

        return td;
    }
    setColor(color) {
        this.td.style.backgroundColor = color;
    }
}





class player {
    constructor () {
        this.spawnPiece();
        document.addEventListener('keydown', function(key) {
            if (key == "ArrowUp") {
                console.log(key);
                return;
            }
            if (key == "ArrowUp") {
                console.log(key);
                return;
            }
            if (key == "ArrowUp") {
                console.log(key);
                return;
            }
            if (key == "ArrowUp") {
                console.log(key);
                return;
            }

        })
    }
    
    spawnPiece() {
        let randomIndex = Math.floor(Math.random() * pieces.length);
        currentShape = pieces[randomIndex];
        currentColor = colors[randomIndex];
        this.x = 3;
        this.y = 0;
    }

    gravity(){
        this.y++
    }

}

function update() {
    for (let r = 0; r < row; r++) {
        for (c = 0; c < column; c++) {
            let cellColor;
            if (board[r][c].value == 0) {
                cellColor = "transparent";

            } else {
                cellColor = board[r][c].value;
            }
        board[r][c].setColor(cellColor);
        }
    }

    for (let r = 0; r < currentShape.length; r++) {
        for (let c = 0; c < currentShape[r].length; c++) {
            if (currentShape[r][c] == 1) {
                let updateY = activePlayer.y + r;
                let updateX = activePlayer.x + c;

                if (updateY < row && updateX >= 0 && updateX < column) {
                    board[updateY][updateX].setColor(currentColor);
                }
            }
        }
    }
}



createBoard()
let activePlayer = new player;

setInterval(function() {
    activePlayer.gravity();
    update();
}, 200);

