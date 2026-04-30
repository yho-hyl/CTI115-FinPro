



x=10
y=20


let grid = document.createElement(`table`);




function createBoard() {
    let grid = document.createElement(`table`);
    grid.style.borderCollapse = "collapse";
    board = []; 

    for (let r = 0; r < y; r++) {
        let tableRow = document.createElement(`tr`);
        let rowArray = []; 
        
        for (let c = 0; c < x; c++) {
            let tableColumn = new Cell(c, r);
            rowArray.push(tableColumn); 
            tableRow.appendChild(tableColumn.table);
        }
        board.push(rowArray); 
        grid.appendChild(tableRow);
    }
    document.body.appendChild(grid);

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
    let colors = ["cyan", "yellow", "purple", "orange", "blue", "green", "red"];


    function spawnPiece() {
        let randomIndex = Math.floor(Math.random() * pieces.length);
        currentShape = pieces[randomIndex];
        currentColor = colors[randomIndex];
        currentX = 3;
        currentY = 0;

    }
}


class Cell {
    x;
    y;
    table;
    value = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.table = this.generateCellDiv(); 
    } 
    
    generateCellDiv() {
        let td = document.createElement(`td`);


        // Slightly smaller cells so a height of 20 fits on screen
        td.style.width = "15px";
        td.style.height = "15px"; 
        td.style.backgroundColor = "transparent";

        td.innerText = this.value
        return td;
    }
}







class player extends Cell {
    currentShape;
    currentColor;
    currentX = 0;
    currentY = 0;
    gameInterval;

    constructor (currentX, currentY) {
        currentX = this.currentX;
        currentY = this.currentY;
        super(value);
    }

    grabity () {
        let randomIndex = Math.floor(Math.random() * pieces.length);
        currentShape = pieces[randomIndex];
        currentColor = colors[randomIndex];
    }

}



createBoard()