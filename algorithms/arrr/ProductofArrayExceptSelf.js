// Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Example 2:

// Input: nums = [-1, 1, 0, -3, 3]
// Output: [0, 0, 9, 0, 0]
//[0,0]

const output = (nums) => {
    if (nums.length < 2) return nums;
    const res = new Array(nums.length);
    let prefix = 1, postfix = 1;
    for (let i = 0; i < nums.length; i++){
        res[i] = prefix;
        prefix *= nums[i];       
    }

    for(let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res
} 

const testVal = output([1, 2, 3, 4])

console.log({testVal})