const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    //Filter out all non numbers, then convert strings to numbers. 
    const filtered = arr.filter(elem => Number(elem)).map(Number),
        mid = Math.floor(filtered.length / 2),
        left = filtered.slice(0, mid),
        right = filtered.slice(mid);
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

const merge = (leftArr, rightArr) => {
    const sorted = [];

    while (leftArr.length && rightArr.length) {
        leftArr[0] <= rightArr[0] ? sorted.push(leftArr.shift()) : sorted.push(rightArr.shift())
    }

    return sorted.concat(leftArr, rightArr);
}

const sortThisArr = mergeSort([20273, 2912, 2121, 0, -9999, .098, NaN, 909090909090212, '2', "d", 'dd', null, undefined, '111', 111]);

console.log({ sortThisArr })





// function merge(left, right) {
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     // Sorting and merging process
//     while(leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]) {
//             resultArray.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             resultArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     // Concatenating the remaining elements
//     return resultArray
//         .concat(left.slice(leftIndex))
//         .concat(right.slice(rightIndex));
// }

// function mergeSort (unsortedArr) {

//     if(unsortedArr.length <= 1) return unsortedArr;

//     const mid = Math.floor(unsortedArr.length / 2), 
//           left =  unsortedArr.slice(0, mid), 
//           right = unsortedArr.slice(mid);

//     return merge(mergeSort(left), mergeSort(right));
// }

// const mixedDeck = [3, 2, 7, 5, 4, 9, 6, 1, 8];
// console.log(mergeSort(mixedDeck));