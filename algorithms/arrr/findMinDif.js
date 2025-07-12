
function findMinDifference(nums) {   
    if(nums.length < 2) return 0;
    let minDif = Infinity;
    const length = nums.length, sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < length -1; i++) {       
        let dif = sorted[i + 1] - sorted[i];
        if(dif < minDif) minDif = dif;        
    }
    return minDif;
}

const nums = [3, 8, 15, 10];
console.log(findMinDifference(nums)); // Expected output: 2