function findIndices(arrA, arrB) {
    const n = arrA.length;
    const diffMap = new Map();
    for(let i = 0; i < n; i++) {
        const diff = arrA[i] - arrB[i];
        if (!diffMap.has(diff)) {
            diffMap.set(diff, []);
        }
        diffMap.get(diff).push(i);
    }

    let best_i = n; 
    let best_j = n; 

    for(let i = 0; i < n; i++) {
        let diff_i = arrA[i] - arrB[i];
        let target_diff = -diff_i;
        if(diffMap.has(target_diff)) {
            const potential_j_indices = diffMap.get(target_diff);

            for(let current_j of potential_j_indices) {
                if (current_j === i) continue;
                if(i < best_i) {
                    best_i = i;
                    best_j = current_j;
                } else if( i === best_i) {
                    if(current_j < best_j) {
                        best_j = current_j;
                    }
                }
            }
        }
    }

    return [best_i, best_j];
}

// Example usage:
console.log(findIndices([2, 5, 1, 4], [3, 6, 3, 2])); // Output: [2, 3]

  // const sumsMap = new Map();
    // let j = 0; 
    // for(let i = 1; i < arrA.length; i++){

    // }