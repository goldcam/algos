function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Sorting and merging process
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenating the remaining elements
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function mergeSort (unsortedArr) {

    if(unsortedArr.length <= 1) return unsortedArr;

    const mid = Math.floor(unsortedArr / 2), 
          left =  unsortedArr.slice(0, mid), 
          right = unsortedArr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const mixedDeck = [3, 2, 7, 5, 4, 9, 6, 1, 8];
console.log(mergeSort(mixedDeck));