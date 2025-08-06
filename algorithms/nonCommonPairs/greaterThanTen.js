function solution(arr) {
    //too slow
    // let totalPairs = arr.length * (arr.length - 1) / 2;
    // arr.sort((a, b ) => a - b); 
    // let j = 0; 
    // let closePairs = 0;

    // for(let i = 0; i < arr.length; i++) {
    //   while(j < i && arr[i] - arr[j] > 10)  j++;
    //   closePairs += i-j;       
    // }
    // return totalPairs - closePairs;





    let totalPairs = arr.length * (arr.length - 1) / 2, closePairs = 0;
    const presenceMap = new Map();
    for (const num of arr) {
        presenceMap.set(num, true);
    }

    for (const num of arr) {
        for (let i = 1; i <= 10; i++) {
            const target = num + i;            
            if (presenceMap.has(target)) closePairs++;            
        }
    }

  return totalPairs - closePairs;
}

// Example usage
const arr = [ -20, -10, 0, 10, 20];
console.log(solution(arr));