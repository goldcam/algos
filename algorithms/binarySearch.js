const binarySearch = (arr, target) => {
    let left = 0,
        right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return `target: ${target} at ${mid} of ${arr}`;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1
}


const findVal = binarySearch([1, 2, 3, 4, 5, 6, 7], 5);

console.log({ findVal })