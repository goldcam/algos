function sumNumbers(queries) {
    // TODO: Implement this method
    const res = [];
    const sumNumbers = (min, max) => {
        const numCount = max - min + 1; 
        return (numCount / 2) * (min + max);    
    };
    for(let i = 0; i < queries.length; i++) {        
        let sum = 0;
        const first = queries[i][0], second = queries[i][1];
        const min = Math.min(first, second);
        const max = Math.max(first, second);
        min === max ? sum = min : sum = sumNumbers(min, max);
        res.push(sum);
    }
    return res;
}

// Example usage:
const queries = [
    [1, 5],
    [5, 1],
    [1, 1],
    [500, 500],
    [1, 500],
    [123, 321]
];

console.log(sumNumbers(queries));
// Output should be: [15, 15, 1, 500, 125250, 44178]