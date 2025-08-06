function numDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count += (i * i === n) ? 1 : 2;
        }
    }
    return count;
}

function closestPerfectSquareDivisors(arr) {
    // TODO: Your solution

    const nearest_sq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
    const res = [];


    for(let i = 0; i < arr.length;i++) {
        const num = arr[i];
        res.push(numDivisors(nearest_sq(num)))       
    }
    
    
    return res;
}

// Example usage:
const arr = [7, 17, 20, 7, 3];
console.log(closestPerfectSquareDivisors(arr));