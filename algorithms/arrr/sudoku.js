const  isValidSudoku =  (board) =>  {
    if(board.length < 1 || !board || board.length !== 9 || board[0].length !== 9) return false;

    const rows = board.length; 
    const cols = board[0].length;      

    for(let r = 0; r < rows; r++) {
        const rowSet = new Set();
        const colSet = new Set()
        const squaresSet = new Set();
        
        for(let c = 0; c < cols; c++) {
            let row = board[r][c];
            let col = board[c][r];
            let square = board[3 * Math.floor(r / 3) + Math.floor(c / 3)][3 * (r % 3) + (c % 3)]

            if (row !== '.') {
                if (rowSet.has(row)) return false;
                rowSet.add(row);
            }

            if (col !== '.') {
                if (colSet.has(col)) return false;
                colSet.add(col);
            }
            if (square !== '.') {
                if (squaresSet.has(square)) return false;
                squaresSet.add(square);
            }
       }
    }
    return true;
};

const board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."], 
    ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
    [".", "9", "8", ".", ".", ".", ".", "6", "."], 
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"], 
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
    [".", "6", ".", ".", ".", ".", "2", "8", "."], 
    [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];


console.log({ isValidSudoku: isValidSudoku(board1)});