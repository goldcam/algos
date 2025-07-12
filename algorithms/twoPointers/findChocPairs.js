function findChocPairs(sweetness) {
    // TODO: implement the solution here
    const res = [];
    sweetness.sort((a, b) => b - a );
    let left = 0; 
    let right = sweetness.length - 1;

    const target = 0;
    while(left < right) {  
        const l = sweetness[left], r = sweetness[right]
        const total = l + r;

        if(total === target){
            res.push([l, r]);
            left++;
            right--        
        }else if(total < target) {
            left++;
        } else {
            right--;
        }

    }

    return res.sort((a, b) => a[0] - b[0]);
}

// Example usage
let sweetness = [4, 3, -5, 5, -3, -4];
let result = findChocPairs(sweetness);
console.log(result); // Expected Output: [ [ 3, -3 ], [ 4, -4 ], [ 5, -5 ] ]