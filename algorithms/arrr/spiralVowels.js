function spiralTraverseAndVowels(grid) {
    // TODO: Your solution

    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return [];
    }
    const rows = grid.length;
    const cols = grid[0].length;
    const res = [];
    const final = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let col = 0, row = 0, left = 0, top = 1, bottom = rows -1 , right = cols -1,
        dir = 0;// 0 moving left, 1 moving down, 2 moving right, 3 moving up,

    for (let i = 0; i < rows * cols; i++) {
        res.push(grid[row][col]);
        if (vowels.includes(res[i])) final.push(i);    
        if(dir === 0) {
            if (col === right) {
                row++;
                dir = 1;
                right--;
            } else {
                col++;
            }
        } else if(dir === 1) {
            if(row === bottom) {
                col--;
                dir = 2;
                bottom--;
            } else {
                row++;
            }
        } else if(dir === 2) {
            if(col=== left ) {
                dir = 3;
                row--;
                left++;
            } else {
                col--;
            }
        } else {
            if(row === top) {
                dir = 0;
                col++;
                top++
            } else {
                row--;
            }
        }
    }  
    return final;
}

// Example function call
const grid = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    // ['m', 'n', 'o', 'p']
];
const grid2 = [
    ['a', 'b',], 
    ['c', 'd'],
    ['e', 'f'], 
    ['g', 'h'],

    
];
//['a', 'b', 'c', 'd', 'h', 'l', 'k', 'j', 'i', 'e', 'f', 'g']
console.log(spiralTraverseAndVowels(grid)); // Expected Output: [0, 8, 9]
// console.log(spiralTraverseAndVowels(grid2)); // Expected Output: [0, 8, 9]