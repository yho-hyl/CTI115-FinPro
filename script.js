let tbl = [];
let grid = document.createElement(`table`);
tbl = []; // Reset the global tbl array

for (r = 0; r < 40; r++) {
    let tableRow = document.createElement(`tr`);
    let rowArray = []; // Make a row array to hold the Cells
            
    for (c = 0; c < 10; c++) {
        let tableColumn = document.createElement(`td`); // c is x and r is y
        tableColumn.innerText = r
        rowArray.push(tableColumn); // Push the actual Cell object
        tableRow.appendChild(tableColumn)
    }
    tbl.push(rowArray); // Push the completed row into tbl
    grid.appendChild(tableRow);
}
document.body.appendChild(grid);

