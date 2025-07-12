function getLongestSubarray(array, k) {
    if(array.length === 0 || k === 0) return [];
    let res = [], sum = 0, l = 0, maxLength = 0, r = 0;
    while(r < array.length){
        sum += array[r];
        while(sum > k && l <=r) {
            sum -= array[l];
            l++;
        }
        if(sum === k) {
            const currLength = r - l + 1
            if(currLength > maxLength) {
                maxLength = currLength;
                res = array.slice(l, r + 1);
            }
        }
        r++;
    }
    return res;
}




const longSubArr = (arr, target) => {
    const n = arr.length;
    if (n === 0 || target === 0) return [];  
    let res = [], l = 0, r = 0, sum = 0, maxLength = 0;
    while ( r < n) {
        sum += arr[r];
        while (sum > target && l <= r){
            sum -= arr[l];
            l++
        }
        if(sum === target) {
            currLength = r - l  + 1;
            if(currLength > maxLength) {
                maxLength = currLength;
                res = arr.slice(l, r + 1);
            }
        }
        r++;
    }
    return res;
}

const shortestSubArr = (arr, target) => {
    const n = arr.length;
    if (n === 0 || target < 0 ) return [];
    let res = [], l = 0, r = 0, sum = 0, minLength = Infinity;
    while (r < n) {
        sum += arr[r];
        while (sum > target && l <= r) {
            sum -= arr[l];
            l++
        }
        if (sum === target) {            
           let currLength = r - l + 1;            
            if (currLength < minLength) {
                minLength = currLength;
                res = arr.slice(l, r + 1);
            }
        }
        r++;
    }
    return res;
};

// Example usage
console.log(shortestSubArr([1, 2, 3, 4, 5], 5)); // Expected output: [ 2, 3 ]
console.log(longSubArr([1, 2, 3, 4, 5, 1, 1, 1, 1, 1], 7)); // Expected output: [ 1,1,1,1,1 ]
console.log(shortestSubArr([1, 2, 3, 4, 5], 15)); // Expected output: [1, 2, 3, 4, 5]
console.log(shortestSubArr([3, 3, 2, 2, 2], 6)); // Expected output: [2,2,2]