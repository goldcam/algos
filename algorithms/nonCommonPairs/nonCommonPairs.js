function nonCommonPairs(arr) {
    let indices = {};
    let totalPairs = arr.length * (arr.length - 1) / 2;

    arr.forEach((pair, idx) => {
        pair.forEach(num => {
            if (!indices[num]) indices[num] = [];
            indices[num].push(idx);
        });
    });

    let commonPairs = 0;
    Object.keys(indices).forEach(num => {
        let size = indices[num].length;
        commonPairs += size * (size - 1) / 2;
    });

    return totalPairs - commonPairs;
}