//

function maximumSum(numbers, k) {
    // TODO: Implement the function to find maximum subarray of size k in numbers
    const res = [];
    let maxSum = 0;
    let tempSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        maxSum += numbers[i];
        res[0] = maxSum;
        res[1] = i;
    }
    tempSum = maxSum;
    
    // Slide the window
    for (let i = k; i <numbers.length; i++) {
        const windowStart = numbers[i - k];
        const windowEnd = numbers[i];      
        tempSum = tempSum - windowStart + windowEnd; // Subtract old element, add new 
        // maxSum = Math.max(maxSum, tempSum); // Update max sum
        if(maxSum < tempSum) {
            maxSum = tempSum;
            res[0] = maxSum;
            res[1] = i - k + 1;           
        }
    }

    return res
}

// Example usage:
console.log(maximumSum([2, 1, 5, 1, 3, 2], 3)); // Expected output: [9, 2]
console.log(maximumSum([2, 1, 5, 1, 3, 2], 2)); // Expected output: [6, 1]
console.log(maximumSum([11,2, 1, 5, 1, 3, 2], 1)); // Expected output: [6, 1]