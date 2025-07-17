function solution(arr, target) {
    // TODO: Your solution

    // const seenNumbers = new Map();

    //   for (let i = 0; i < arr.length; ++i) {
    //     const currentNum = arr[i];
    //     const complement = target - currentNum;

    //     // Check if the complement has been seen before
    //     if (seenNumbers.has(complement)) {
    //         // If yes, we found a pair!
    //         // The complement was at seenNumbers.get(complement) index
    //         // The currentNum is at index i
    //         return [complement, currentNum]; // Or [arr[seenNumbers.get(complement)], arr[i]]
    //     }

    //     // If not, add the current number and its index to the map
    //     // so it can be a complement for future numbers
    //     seenNumbers.set(currentNum, i);
    // }

    // // If no pair is found after checking all numbers
    // return [];

    const seenNums = new Map();
    
    for(let i = 0; i < arr.length; ++i) {
        const num = arr[i];
        const comp = target - num;

        if(seenNums.has(comp)){
            return [comp, num];
        }
        seenNums.set(comp, i);
    } 

    return [];


    // const length = arr.length;
    // if(length < 2) return [];
    // const sumMap = new Map();

    //    for (let i = 0; i < length - 1; ++i) {
    //     for (let j = i + 1; j < length; ++j) {
    //         const pairwiseSum = arr[i] + arr[j];
    //         if (!sumMap.has(pairwiseSum)) {
    //             sumMap.set(pairwiseSum, []);
    //         }
    //         sumMap.get(pairwiseSum).push([i, j]);
    //     }
    //    }

    //     if(sumMap.has(target) ) {
    //         const pairs1 = sumMap.get(target);
    //         for (const pair1 of pairs1) {
    //             const [a, b] = pair1;
    //             return [arr[a], arr[b]];
    //          }
    //     }
    // return [];
}

const arr = [2, 13, 4, 7, 5, 15];
const target = 9;

console.log(solution(arr, target)); 