const reverseTransformMatrix = matrix => {
    let rows = matrix.length;
    let cols = rows > 0 ? matrix[0].length : 0;
    let result = [];

    // TODO: Modify the loop to transpose the matrix in reverse order    
    for (let i = cols - 1; i >= 0; i--) {
        const newRow = [];
        for (let j = 0; j < rows; j++) {
            newRow.push(matrix[j][i]);
        }
        result.push(newRow);
    }

    return result
}

let matrix = [
    [101, 102, 103, 104],
    [201, 202, 203, 204],
    [301, 302, 303, 304]
];

// TODO: Store the result of transformMatrix in transposedMatrix and print it
const transposedMatrix = reverseTransformMatrix(matrix);
console.log(transposedMatrix); 
//output 
// [
//     [104, 204, 304],
//     [103, 203, 303],
//     [102, 202, 302],
//     [101, 201, 301]
// ]

const spiralMatrix =  n => {
    const matrix = Array(n).fill(null).map(() => Array(n).fill(0));
    let num = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }
    return matrix;
}

const test = spiralMatrix(4);
console.log({test})


const reflectOverSecondaryDiagonal = matrix => {
    let size = matrix.length;
    let newMatrix = [];
    // for (let j = matrix[0].length - 1; j >= 0; --j) {
    //     const newRow = [];
    //     for (let i = size - 1; i >= 0; --i) {
    //         newRow.push(matrix[i][j])
    //     }
    //     newMatrix.push(newRow)
    // }

    for(let i = 0; i < size; i++) {
        newMatrix[i] = [];
        for(let j = matrix[i].length - 1; j >= 0; j--) {
            newMatrix[i][j] = matrix[j][i]
        }
    }
    return newMatrix;
}

let squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transformedMatrix = reflectOverSecondaryDiagonal(squareMatrix);

console.log(transformedMatrix)