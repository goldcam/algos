function findAndReplace(A, B) {
        let B_sorted = [];
        for (let i = 0; i < B.length; i++) {
            B_sorted.push({ value: B[i], index: i });
        }
        B_sorted.sort((a, b) => a.value - b.value);

        let j = 0; // Initialize right pointer
        let res = new Array(A.length); // Initialize the result array

        for (let i = 0; i < B.length; i++) {
            let target = 2 * B_sorted[i].value; // The target is twice the current number in the sorted B
            while (j < B.length - 1 && B_sorted[j + 1].value < target) {
                j++; // Move the right pointer to find a number smaller than or equal to the target
            }
            if (j < B.length - 1 &&
                Math.abs(B_sorted[j + 1].value - target) < Math.abs(target - B_sorted[j].value)) {
                j++; // Move the right pointer one more step if the next number is closer to the target
            }

        res[B_sorted[i].index] = A[B_sorted[j].index];
        // Collect the corresponding element from A at the same index as the closest number in B_sorted
    }

    return res;
}

// const A = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
// const B = [4, 12, 3, 9, 6, 1, 5, 8, 37, 25, 100];
// const result = findAndReplace(A, B);
// console.log(result);







function findAndReplace(X, Y) {
    // TODO: implement
    const x_sorted = X.map((value, index) => ({ value, index }));
    x_sorted.sort((a, b) => a.value - b.value);

    let j = 0;
    let res = new Array(Y.length);
    for (let i = 0; i < Y.length; i++) {
        let target = Y[i] / 2; 
        while (j < x_sorted.length - 1 && x_sorted[j + 1].value < target) {
            j++;
        }
        let chosenCandidate = x_sorted[j];

        if (j < x_sorted.length - 1) {
            const candidateLeft = x_sorted[j];
            const candidateRight = x_sorted[j + 1];

            const diffLeft = Math.abs(candidateLeft.value - target);
            const diffRight = Math.abs(candidateRight.value - target);

            if (diffRight < diffLeft) {
                // Right candidate is strictly closer
                chosenCandidate = candidateRight;
            } else if (diffLeft === diffRight) {
                // They are equally close, apply the tie-breaking rule:
                // "select the first occurring one in X" (smaller originalIndex)
                if (candidateRight.index < candidateLeft.index) {
                    chosenCandidate = candidateRight;
                }
                // Else (candidateLeft.originalIndex <= candidateRight.originalIndex),
                // chosenCandidate remains candidateLeft (which is already set)
            }
            // Else (diffLeft < diffRight), chosenCandidate remains candidateLeft (which is already set)
        }
        res[i] = Y[chosenCandidate.index];
        // res[i] = Y[x_sorted[j].index];
        
    }



    return res;
}

const X = [4, 12, 9, 20];
const Y = [ 10, 20, 40, 50, 60 ];
console.log(findAndReplace(X, Y)); // Expected Output: [10, 40, 50, 50]
console.log(findAndReplace([12, 10], [22])); 



function closestHalfMatch(X, Y) {
    // Step 1: Prepare sorted X with original indices
    const indexedX = X.map((val, idx) => ({ val, idx }));
    indexedX.sort((a, b) => a.val - b.val);

    // Step 2: Binary search helper to find closest
    function findClosest(halfY) {
        let left = 0, right = indexedX.length - 1;
        let best = indexedX[0];

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const curr = indexedX[mid];

            // Update best if it's closer or same distance but earlier in original X
            const diffCurr = Math.abs(curr.val - halfY);
            const diffBest = Math.abs(best.val - halfY);

            if (
                diffCurr < diffBest ||
                (diffCurr === diffBest && curr.idx < best.idx)
            ) {
                best = curr;
            }

            if (curr.val < halfY) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return best;
    }

    // Step 3: Build result
    const result = [];
    for (let y of Y) {
        const half = y / 2;
        const closest = findClosest(half);
        result.push(y);
    }

    return result;
}

// const X = [4, 12, 9, 3000, 20];
// const Y = [10, 20, 40, 50];
// console.log(closestHalfMatch(X, Y)); 