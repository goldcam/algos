function countSubmatricesWithE(board) {
    let count = 0;
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (
                (i < rows - 2 && j < cols - 2) &&
                (board[i][j] === 'E' &&
                    board[i + 2][j] === 'E' &&
                    board[i][j + 2] === 'E' &&
                    board[i + 2][j + 2] === 'E')

            ) {
                ++count;

            }

        }
    }

    return count
}

let board = [
    ['E', 'P', 'E', 'P'],
    ['P', 'E', 'P', 'E'],
    ['E', 'P', 'E', 'P'],
    ['P', 'E', 'P', 'E']
];

console.log(countSubmatricesWithE(board));



const findNextPeak = (matrix, row, col) =>  {
    const rows = matrix.length,
          cols = matrix[0].length,
          directions = [[-1, 0], [1, 0], [0, -1], [0, 1]], // Define directions
          currentHeight = matrix[row][col];

    for (const dir of directions) {
        const r = row + dir[0], c = col + dir[1];

        if (
            r < rows &&
            c < cols &&
            r >= 0 &&
            c >= 0 &&
            matrix[r][c] > currentHeight) {
            return [r, c];
        }
    }

    return [row, col]; // No higher peak, stay in place
}

const trailMap = [
    [3, 5, 6],
    [4, 7, 8],
    [1, 2, 9]
];

const startPosition = [1, 1]; // Starting elevation
const nextPeak = findNextPeak(trailMap, startPosition[0], startPosition[1]);

console.log("Next peak at coordinates:", nextPeak);




function trekPath(elevationMap, startRow, startCol) {
    const rows = elevationMap.length,
        cols = elevationMap[0].length,
        directions = [[-1, 0], [1, 0], [0, -1], [0, 1]],
        path = [];
    path.push(elevationMap[startRow][startCol]);

    while (true) {
        let currMax = path[0],
            nextRow = -1, nextCol = -1;

        for (const dir of directions) {
            const newRow = startRow + dir[0]
                  newCol = startCol + dir[1];

            if (newRow >= 0 &&
                newCol >= 0 &&
                newRow < rows &&
                newCol < cols &&
                elevationMap[newRow][newCol] > currMax
            ) {
                nextRow = newRow;
                nextCol = newCol;
                currMax = elevationMap[newRow][newCol]
            }

        }

        if (currMax <= elevationMap[startRow][startCol]) {
            break;
        }

        startRow = nextRow;
        startCol = nextCol;

        path.push(currMax);

    }

    return path;
}

const mountain = [
    [1, 2, 3],
    [2, 3, 4],
    [3, 5, 6]
];
const result = trekPath(mountain, 1, 1);
console.log(result); // Output should be [3, 5, 6]