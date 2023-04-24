export class Grid {
    renderGrid(gridSize, wordGrid) {

        var gridArea = document.getElementsByClassName("grid-area")[0];
        if(gridArea.lastChild) {
            gridArea.removeChild(gridArea.lastChild);
        }
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        let index = 0;
        for (var i = 0; i < gridSize; i++) {
            var row = document.createElement("tr");

            for (var j = 0; j < gridSize; j++) {

                var cell = document.createElement("td");
                var cellText = document.createTextNode(wordGrid[index++]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        gridArea.appendChild(tbl);
    }
}