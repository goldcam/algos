function zigzagTraverseAndPrimes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let traversal = [];
    const res = {};
    let row = 0, col = 0, moveRight = true;

    function isPrime(n) {
        if (n <= 1) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        let sqrt = Math.floor(Math.sqrt(n)) + 1;
        for (let i = 3; i < sqrt; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }

    // TODO: Your solution

    for(let i = 0; i < rows * cols; i++) {
        traversal.push(matrix[row][col]);
        if(isPrime(traversal[i])) {
            res[i] = traversal[i];
        }
        if(moveRight) {
            if(col === cols -1 ) {
                moveRight = false;
                row++                
            } else {
                col++;
            }
        } else {
            if(col === 0) {
                moveRight = true
                row++
            } else {
                col--;
            }
        }
    }


    return res;
}

const matrix = [
    [10, 11, 4, 3],
    [6, 7, 15, 13],
    [8, 14, 1, 2],
    [5, 9, 12, 19]
];

console.log(zigzagTraverseAndPrimes(matrix));
// Expected output: {1: 11, 3: 3, 4: 13, 6: 7, 11: 2, 12: 19, 15: 5}