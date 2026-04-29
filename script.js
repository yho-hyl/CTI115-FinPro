

//⅃  Color: Dark Blue
//L  Color: Light orange
//■  Color: Yellow
//|  Color: Light Blue
//S  Color: Green
//Z  Color: Red
//T  Color: Purple

x=10
y=20

let tbl = [];
let grid = document.createElement(`table`);
tbl = []; // Reset the global tbl array




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
        this.value = Cell.value;
    } 
    
    generateCellDiv() {
        let td = document.createElement(`td`);
        
        // Slightly smaller cells so a height of 20 fits on screen
        td.style.width = "15px";
        td.style.height = "15px"; 
        td.style.backgroundColor = "transparent";
        
        return td;
    }
}




createBoard()