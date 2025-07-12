function solution(array1, array2) {
    // TODO: implement the solution and return the result array.
    const res = [], a2Set = new Set(array2);
    for(let c of array1) {
        a2Set.has(c) ? res.push(true) : res.push(false);
    }
    return res;
}

// Example usage:
const array1 = ["mars", "jupiter", "venus", "earth"];
const array2 = ["earth", "mars", "neptune"];
const output = solution(array1, array2);
console.log(output);  // Should print: [true, false, false, true]