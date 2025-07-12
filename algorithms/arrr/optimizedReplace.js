function optimizedReplace(A, B) {
    // TODO: implement the function
    const res = [],
          sortB = B.slice().sort((a, b ) => a - b);
    for (let i = 0; i < B.length; i++) {
        let idxInSorted = sortB.indexOf(B[i]);
        if (idxInSorted === 0) {
            idxInSorted++;
        }
        else if (idxInSorted === B.length - 1 ) {
            idxInSorted--;
        }
        else { 
            let left = sortB[idxInSorted - 1], 
                right = sortB[idxInSorted + 1], 
                target = sortB[idxInSorted],
                winNum = (Math.abs(left - target) < Math.abs(right - target) ? left : right);
            idxInSorted = sortB.indexOf(winNum);
        }
        let numFromSorted = sortB[idxInSorted], 
            realIndex = B.indexOf(numFromSorted);
        res.push(A[realIndex]);
    }
    return res;
}





function optimizedReplace2(A, B) {
    const B_indexed = B.map((val, idx) => ({ val, originalIdx: idx }));
    const sortedB_indexed = B_indexed.sort((a, b) => a.val - b.val);

    const res = []; 
    for (let i = 0; i < B.length; i++) {
        const currentBValue = B[i];
       
        let low = 0;
        let high = sortedB_indexed.length - 1;
        let idxInSorted = -1; 
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (sortedB_indexed[mid].val === currentBValue) {
                idxInSorted = mid;
                while (idxInSorted > 0 && sortedB_indexed[idxInSorted - 1].val === currentBValue) {
                    idxInSorted--;
                }
                break;
            } else if (sortedB_indexed[mid].val < currentBValue) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        let winnerIndexedObject;

        if (idxInSorted === 0) {           
            winnerIndexedObject = sortedB_indexed[1];
        } else if (idxInSorted === sortedB_indexed.length - 1) {
            winnerIndexedObject = sortedB_indexed[sortedB_indexed.length - 2];
        } else {
            const leftObj = sortedB_indexed[idxInSorted - 1];
            const rightObj = sortedB_indexed[idxInSorted + 1];
            const targetVal = sortedB_indexed[idxInSorted].val; 
            Math.abs(leftObj.val - targetVal) <= Math.abs(rightObj.val - targetVal) ?
                winnerIndexedObject = leftObj
           :
                winnerIndexedObject = rightObj;
            
        }

        res.push(A[winnerIndexedObject.originalIdx]);
    }

    return res;
}


// Example usage
let A = [10, 20, 30, 40, 50];
let B = [ 7,  5,  1,  2,  4];
let result = optimizedReplace2(A, B);
console.log(result);
// [20,    50,   40,  30,    20]
//zero indexed [a[1], a[4], a[3], a[2], a[1]]





