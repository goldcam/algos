const mergeTwoLists =  (list1, list2) => {
    const mergeList = [...list1, ...list2];
    const quickSort = arr => {
        if (arr.length <= 1) return arr;

        const pivot = arr[0],
            left = [],
            right = [];

        for (let i = 1; i < arr.length; i++) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
        }
        return [...quickSort(left), pivot, ...quickSort(right)]
    }
    const result = quickSort(mergeList);      
    return result;
}


const twoLists = mergeTwoLists([1,2,3], [1,2,3,]);

console.log({twoLists});
