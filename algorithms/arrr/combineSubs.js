function interleaveMatrices(matrixA, matrixB, submatrixCoords) {
    // TODO: Your solution
    const startRowA = submatrixCoords[0][0];
    const endRowA = submatrixCoords[0][1];
    const startColA = submatrixCoords[0][2];
    const endColA = submatrixCoords[0][3];


    let startRowB = submatrixCoords[1][0];
    // let endRowB = submatrixCoords[1][1];
    let startColB = submatrixCoords[1][2];
    let endColB = submatrixCoords[1][3];


    let numRows = endRowA - startRowA + 1;
    let numColsA = endColA - startColA + 1;
    let numColsB = endColB - startColB + 1;

    let submatrixA = [];
    for (let i = 0; i < numRows; i++) {
        submatrixA.push([]);
        for (let j = 0; j < numColsA; j++) {
            submatrixA[i].push(matrixA[startRowA + i - 1][startColA + j - 1]);
        }
    }

    let submatrixB = [];

    for(let i = 0; i< numRows; i++) {
        submatrixB.push([]);
        for(let j = 0; j < numColsB; j++) {
            submatrixB[i].push(matrixB[startRowB + i -1][startColB + j -1]);
        }
    }

    let resultMatrix = [];
    for (let i = 0; i < numRows; i++) {
        resultMatrix.push([]);
        for(let j = 0;  j < numColsA; j++) {
            resultMatrix[i].push(submatrixA[i][j])            
            resultMatrix[i].push(submatrixB[i][j])            
        }
    }
    return  resultMatrix;
}

// Example usage
const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const B = [
    [11, 12, 13],
    [14, 15, 16],
    [17, 18, 19]
];

const submatrixCoords = [[2, 3, 2, 3], [1, 2, 1, 2]];

console.log(interleaveMatrices(A, B, submatrixCoords));
// Output should be:
// [
//    [6, 11, 7, 12],
//    [10, 14, 11, 15]
// ]




function submatrixConcatenation(matrixA, matrixB, submatrixCoords) {
    let startRowA = submatrixCoords[0][0];
    let endRowA = submatrixCoords[0][1];
    let startColA = submatrixCoords[0][2];
    let endColA = submatrixCoords[0][3];
    let startRowB = submatrixCoords[1][0];
    let endRowB = submatrixCoords[1][1];
    let startColB = submatrixCoords[1][2];
    let endColB = submatrixCoords[1][3];

    let numRows = endRowA - startRowA + 1;
    let numColsA = endColA - startColA + 1;
    let numColsB = endColB - startColB + 1;

    let submatrixA = [];
    for (let i = 0; i < numRows; i++) { // Outer loop to iterate through rows of submatrix A
        submatrixA.push([]);
        for (let j = 0; j < numColsA; j++) { // Inner loop to iterate through columns of submatrix A
            submatrixA[i].push(matrixA[startRowA + i - 1][startColA + j - 1]);
        }
    }

    let submatrixB = [];
    for (let i = 0; i < numRows; i++) { // Outer loop to iterate through rows of submatrix B
        submatrixB.push([]);
        for (let j = 0; j < numColsB; j++) { // Inner loop to iterate through columns of submatrix B
            submatrixB[i].push(matrixB[startRowB + i - 1][startColB + j - 1]);
        }
    }

    // The part for the concatenation process
    let resultMatrix = [];
    for (let i = 0; i < numRows; i++) { // Outer loop to iterate through rows of the result matrix
        resultMatrix.push([]);
        for (let j = 0; j < numColsA; j++) { // Inner loop to add elements from submatrix A to the result matrix row
            resultMatrix[i].push(submatrixA[i][j]);
        }
        for (let j = 0; j < numColsB; j++) { // Inner loop to add elements from submatrix B to the result matrix row
            resultMatrix[i].push(submatrixB[i][j]);
        }
    }

    return resultMatrix;
}

// let matrixA = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// let matrixB = [
//     [11, 12, 13],
//     [14, 15, 16],
//     [17, 18, 19]
// ];

// let submatrixCoords = [
//     [2, 3, 2, 3],
//     [1, 2, 1, 2]
// ];

// let result = submatrixConcatenation(matrixA, matrixB, submatrixCoords);
// for (let row of result) {
//     console.log(row.join(" "));
// }