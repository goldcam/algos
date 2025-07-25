function solution(arr, queries) {
    // TODO: Your solution
    const n = arr.length; 
    const precalc = Array.from({length: n}, () => Array(n).fill(0));
    for (let l = 0; l < n; ++l) {
        let maxVal = arr[l];
        let count = 0;
        for (let r = l; r < n; ++r) {
            count = count + arr[r];
            maxVal = Math.max(maxVal, count);
            precalc[l][r] = maxVal;
        }
    }
    const res = [];
    for(let i = 0; i < queries.length; ++i) {
        const l = queries[i][0];
        const r = queries[i][1];
        res.push(precalc[l][r])
    }

    return res;
}

// Example usage
const arr = [3, 1, -4, 2, -5, 1, 3, 6];
const queries = [[0, 4], [2, 6], [2, 7]];
console.log(solution(arr, queries));