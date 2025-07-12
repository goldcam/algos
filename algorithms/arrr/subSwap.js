function submatrixSwap(matrix, coord_S1, coord_S2) {
    // TODO: Your solution
    let sub1RowStart = coord_S1[0]; 
    let sub1RowEnd = coord_S1[1]; 
    let sub1ColStart = coord_S1[2]; 
    let sub1ColEnd = coord_S1[3]; 

    let sub2RowStart = coord_S2[0];
    let sub2RowEnd = coord_S2[1];
    let sub2ColStart = coord_S2[2];
    let sub2ColEnd = coord_S2[3]; 

    const rows = matrix.length;
    const cols = matrix[0].length;
    const res = [];

    let sub1 = matrix.slice(sub1RowStart, sub1RowEnd).map(row => row.slice(sub1ColStart, sub1ColEnd)).flat();
    let sub2 = matrix.slice(sub2RowStart, sub2RowEnd).map(row => row.slice(sub2ColStart, sub2ColEnd)).flat();
    let subIndex1 = 0;
    let subIndex2 = 0;
    


    for(let r = 0; r < rows; r++) {
        res.push([])     
            for (let c = 0; c < cols; c++) {
                if ((r >= sub1RowStart && r < sub1RowEnd) && (c >= sub1ColStart && c < sub1ColEnd)) {
                    res[r].push(sub2[subIndex2]);
                    subIndex2++;
                } else if ((r >= sub2RowStart && r < sub2RowEnd) && (c >= sub2ColStart && c < sub2ColEnd)) {
                    res[r].push(sub1[subIndex1]);
                    subIndex1++;
                } else { 
                    res[r].push(matrix[r][c]);
                }
            } 
    }
    return res;
}

let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let coordS1 = [0, 2, 2, 4];
let coordS2 = [2, 4, 0, 2];

let result = submatrixSwap(M, coordS1, coordS2);

console.log(result);


let a = 1;
let b = 1 + ++a;
console.log({ a, b }, a++ + ++b); // { a: 2, b: 3 } 6
console.log({ a, b }); //{ a: 3, b: 4 }