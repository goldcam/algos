function matrixBoundaryConcatenation(matrixA, matrixB, n) {
    // TODO: Your solution
    const res = [];
    if (!matrixA || matrixA.length === 0 || matrixA[0].length === 0 || 
        !matrixB || matrixB.length === 0 || matrixB[0].length === 0) {
        return res;
    }
    if (n <= 0) {
        return res; 
    }
    

    
    const extractRows = (matrix, n, arr) => {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let startRow = 0;
        let endRow = rows - 1;
        let startCol = 0;
        let endCol = cols - 1;
        let layersExtracted = 0;

        while (layersExtracted < n && startRow <= endRow && startCol <= endCol) {
            for (let c = startCol; c <= endCol; c++) {
                arr.push(matrix[startRow][c]);
            }


            if (startCol < endCol || (startRow === endRow && startCol === endCol)) {
                for (let r = startRow + 1; r <= endRow; r++) {
                    arr.push(matrix[r][endCol]);
                }
            }

            if (startRow < endRow) {
                for (let c = endCol - 1; c >= startCol; c--) {
                    arr.push(matrix[endRow][c]);
                }
            }

            if (startCol < endCol && startRow < endRow) {
                for (let r = endRow - 1; r >= startRow + 1; r--) {
                    arr.push(matrix[r][startCol]);
                }
            }
            startRow++;
            endRow--;
            startCol++;
            endCol--;
            layersExtracted++;
        } 
        return arr;       
    }
    return extractRows(matrixB, n, extractRows(matrixA, n, res));
}

// Example function calls
let matrixA = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let matrixB = [
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [25, 26, 27, 28],
    [29, 30, 31, 32]
];

let n = 2;
console.log(matrixBoundaryConcatenation(matrixA, matrixB, n));
// Expected output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10, 17, 18, 19, 20, 24, 28, 32, 31, 30, 29, 25, 21, 22, 23, 27, 26]