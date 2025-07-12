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

const A = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
const B = [4, 12, 3, 9, 6, 1, 5, 8, 37, 25, 100];
const result = findAndReplace(A, B);
console.log(result);