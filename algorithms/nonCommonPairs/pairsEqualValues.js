
function solution(arr) {
    // TODO: Your solution
    let indices = {};
     arr.forEach((num, idx) => {
            if (!indices[num]) indices[num] = [];
            indices[num].push(idx);       
    });

    let commonPairs = 0;
    Object.keys(indices).forEach(num => {
        let size = indices[num].length;
        commonPairs += size * (size - 1) / 2;
    });
    return commonPairs;

}

// Example usage
const arr = [1, 1, 2, 2, 1, 3];
console.log(solution(arr));