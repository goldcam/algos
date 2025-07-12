function solution(matrix) {
    // TODO: Your solution
    let rows = matrix.length;
    let cols = matrix[0].length;
    let traversal = [];
    let result = [];


    let row = 0, col = 0, dir = 1;
    for (let i = 0; i < rows * cols; i++) {
        traversal.push(matrix[row][col]);
        

        // if (matrix[row][col] < 0) result.push([row, col])

       
    }


    return traversal;
}

// Example function call
const exampleMatrix = [
    [1,  -2,   3, -4],
    [5,  -6,   7,  8],
    [-9, 10, -11, 12]
];
//[1, -2, 5, -9, -6, 3, -4, 7, 10, -11, 8, 12]

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Zigzag Traversal matrix1:", solution(matrix1));
// Expected output: [1, 2, 4, 7, 5, 3, 6, 8, 9]

console.log(solution(exampleMatrix)); // Output: [[0, 1], [2, 0], [1, 1], [0, 3], [2, 2]]


function traverseMatrixZigzag(matrix) {
    // Handle empty or invalid matrix input
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    let row = 0; // Current row index
    let col = 0; // Current column index
    let movingUp = true; // True if moving diagonally up-right, false if moving diagonally down-left

    // Continue until all elements are visited
    // The total number of elements is rows * cols
    while (result.length < rows * cols) {
        // 1. Add the current element to the result array
        result.push(matrix[row][col]);

        // 2. Determine the next move based on the current direction
        if (movingUp) {
            // Try to move diagonally up-right (row decreases, col increases)
            let nextRow = row - 1;
            let nextCol = col + 1;

            // Check if the next position is out of bounds (hit top edge or right edge)
            if (nextRow < 0 || nextCol >= cols) {
                // Hit a boundary, so reverse direction for the next diagonal sweep
                movingUp = false;

                // Adjust the starting point for the new sweep:
                // If hit the right edge (col went out of bounds), move down one cell
                if (nextCol >= cols) {
                    row++; // Stay at the same column (cols-1) and move to the next row
                }
                // Else (must have hit the top edge only), move right one cell
                else {
                    col++; // Stay at row 0 and move to the next column
                }
            } else {
                // Not at a boundary, continue moving diagonally up-right
                row = nextRow;
                col = nextCol;
            }
        } else { // movingDown (diagonally down-left)
            // Try to move diagonally down-left (row increases, col decreases)
            let nextRow = row + 1;
            let nextCol = col - 1;

            // Check if the next position is out of bounds (hit bottom edge or left edge)
            if (nextRow >= rows || nextCol < 0) {
                // Hit a boundary, so reverse direction for the next diagonal sweep
                movingUp = true;

                // Adjust the starting point for the new sweep:
                // If hit the bottom edge (row went out of bounds), move right one cell
                if (nextRow >= rows) {
                    col++; // Stay at the same row (rows-1) and move to the next column
                }
                // Else (must have hit the left edge only), move down one cell
                else {
                    row++; // Stay at col 0 and move to the next row
                }
            } else {
                // Not at a boundary, continue moving diagonally down-left
                row = nextRow;
                col = nextCol;
            }
        }
    }

    return result;
}

// --- Example Usage ---

// Example 1: 3x3 matrix (from typical zigzag patterns)

console.log("Matrix 1:", matrix1);
console.log("Zigzag Traversal 1:", traverseMatrixZigzag(matrix1));
// Expected output: [1, 2, 4, 7, 5, 3, 6, 8, 9]

// Example 2: 2x4 matrix
const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];
console.log("\nMatrix 2:", matrix2);
console.log("Zigzag Traversal 2:", traverseMatrixZigzag(matrix2));
// Expected output: [1, 2, 5, 6, 3, 4, 7, 8]

// Example 3: 4x2 matrix
const matrix3 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
];
console.log("\nMatrix 3:", matrix3);
console.log("Zigzag Traversal 3:", traverseMatrixZigzag(matrix3));
// Expected output: [1, 2, 3, 5, 4, 7, 6, 8]

// Example 4: Single element matrix
const matrix4 = [
    [10]
];
console.log("\nMatrix 4:", matrix4);
console.log("Zigzag Traversal 4:", traverseMatrixZigzag(matrix4));
// Expected output: [10]

// Example 5: Single row matrix
const matrix5 = [
    [1, 2, 3, 4, 5]
];
console.log("\nMatrix 5:", matrix5);
console.log("Zigzag Traversal 5:", traverseMatrixZigzag(matrix5));
// Expected output: [1, 2, 3, 4, 5]

// Example 6: Single column matrix
const matrix6 = [
    [1],
    [2],
    [3],
    [4],
    [5]
];
console.log("\nMatrix 6:", matrix6);
console.log("Zigzag Traversal 6:", traverseMatrixZigzag(matrix6));
// Expected output: [1, 2, 3, 4, 5]