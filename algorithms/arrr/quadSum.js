function findQuadSum(targetSum, numbers) {
    // Step 1: Initialize the Map
    const length = numbers.length;
    const sumMap = new Map();
    
    // Step 2: Populate the Map with the sums of all pairs
    for (let i = 0; i < length - 1; ++i) {
        for (let j = i + 1; j < length; ++j) {
            const pairwiseSum = numbers[i] + numbers[j];
            if (!sumMap.has(pairwiseSum)) {
                sumMap.set(pairwiseSum, []);
            }
            sumMap.get(pairwiseSum).push([i, j]);
        }
    }

    // Step 3: Iterate over the sums
    for (const sum of sumMap.keys()) {
        const complement = targetSum - sum;
        if (sumMap.has(complement)) {
            const pairs1 = sumMap.get(sum);
            const pairs2 = sumMap.get(complement);

            for (const pair1 of pairs1) {
                for (const pair2 of pairs2) {
                    const [a, b] = pair1;
                    const [c, d] = pair2;

                    // Ensure all indices are distinct
                    if (a !== c && a !== d && b !== c && b !== d) {
                        return [numbers[a], numbers[b], numbers[c], numbers[d]];
                    }
                }
            }
        }
    }

    return [];
}

// Example usage:
const numbers = [5, 15, 2, 7, 8, 4];
const target = 24;
console.log(findQuadSum(target, numbers)); // Output: [ 5, 7, 8, 4 ]