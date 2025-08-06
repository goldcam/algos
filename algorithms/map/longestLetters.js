// function solution(S, Q) {
//     // TODO: Your solution

//     const runs = [];
//     const res = [];
//     let currentChar = S[0];
//     let currentRunLength = 0;
//     for (let i = 0; i < S.length; i++) {
//         if (S[i] === currentChar) {
//             currentRunLength++;
//         } else {
//             runs.push({ char: currentChar, length: currentRunLength });
//             currentChar = S[i];
//             currentRunLength = 1;
//         }
//     }
//     runs.push({ char: currentChar, length: currentRunLength });
//     // return runs;

//      for (const query of Q) {
//         const c1 = query[0];
//         const c2 = query[1];

//         // Use a Set for O(1) average time complexity lookup for characters to remove
//         const charsToRemove = new Set([c1, c2]);

//         let maxLengthForQuery = 0;
//         let currentConsecutiveLength = 0;
//         let lastKeptCharacter = null; // Tracks the character of the current consecutive sequence

//         // Iterate through the pre-computed runs
//         for (const run of runs) {
//             // Check if the current run's character should be removed
//             if (charsToRemove.has(run.char)) {
//                 // This run is removed, so it breaks any current consecutive sequence
//                 maxLengthForQuery = Math.max(maxLengthForQuery, currentConsecutiveLength);
//                 currentConsecutiveLength = 0; // Reset for the next potential sequence
//                 lastKeptCharacter = null;     // No character being tracked
//             } else {
//                 // This run's character is kept
//                 if (lastKeptCharacter === null || run.char === lastKeptCharacter) {
//                     // If this is the first kept run after a removal, or if it's the same character
//                     // as the previous kept run, extend the current consecutive length.
//                     currentConsecutiveLength += run.length;
//                 } else {
//                     // If this is a different character than the last kept one,
//                     // the previous sequence has ended.
//                     maxLengthForQuery = Math.max(maxLengthForQuery, currentConsecutiveLength);
//                     // Start a new consecutive sequence with the current run's length.
//                     currentConsecutiveLength = run.length;
//                 }
//                 // Update the last kept character to the current run's character
//                 lastKeptCharacter = run.char;
//             }
//         }

//         // After iterating through all runs, one final check for the sequence that
//         // might extend to the very end of the string.
//         maxLengthForQuery = Math.max(maxLengthForQuery, currentConsecutiveLength);

//         res.push(maxLengthForQuery);
//     }

//     return res;




    
    

// }

// Example usage

// function solution(S, Q) {
    
//     const orderedRuns = [];
//     if (S.length === 0) {
//     } else {
//         let currentRunChar = S[0];
//         let currentRunLength = 0;

//         for (let i = 0; i < S.length; i++) {
//             if (S[i] === currentRunChar) {
//                 currentRunLength++;
//             } else {
//                 orderedRuns.push({ char: currentRunChar, length: currentRunLength });
//                 currentRunChar = S[i];
//                 currentRunLength = 1;
//             }
//         }
//         orderedRuns.push({ char: currentRunChar, length: currentRunLength });
//     }

//     const results = [];

//     for (const query of Q) {
//         const c1 = query[0];
//         const c2 = query[1];

//         let maxLengthForQuery = 0;
//         let currentSegmentLength = 0; 

//         const removedChars = new Set([c1, c2]);

//         for (const run of orderedRuns) {
//             if (removedChars.has(run.char)) {
               
//                 maxLengthForQuery = Math.max(maxLengthForQuery, currentSegmentLength);
//                 currentSegmentLength = 0; 
//             } else {
//                 currentSegmentLength += run.length;
//             }
//         }
//         maxLengthForQuery = Math.max(maxLengthForQuery, currentSegmentLength);
//         results.push(maxLengthForQuery);
//     }

//     return results;
// }

function solution1(S, Q) {
    const ALPHABET_SIZE = 26;
    // Pre-compute results for all 26x26 possible (c1, c2) pairs
    // memo[char1_idx][char2_idx] stores the result when char1 and char2 are removed.
    const memo = Array.from({length:ALPHABET_SIZE}, () => Array(ALPHABET_SIZE).fill(0));

    const getCharIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

    for (let i = 0; i < ALPHABET_SIZE; i++) {
        const char1 = String.fromCharCode('a'.charCodeAt(0) + i); 
        for (let j = 0; j < ALPHABET_SIZE; j++) {
            const char2 = String.fromCharCode('a'.charCodeAt(0) + j);

            let currentSegmentLength = 0;
            let maxSegmentLengthForPair = 0;

            for (let k = 0; k < S.length; k++) {
                const sChar = S[k];
                if (sChar === char1 || sChar === char2) {
                    maxSegmentLengthForPair = Math.max(maxSegmentLengthForPair, currentSegmentLength);
                    currentSegmentLength = 0; 
                } else {
                    currentSegmentLength++;
                }
            }
            maxSegmentLengthForPair = Math.max(maxSegmentLengthForPair, currentSegmentLength);

            memo[i][j] = maxSegmentLengthForPair;
        }
    }
    console.log({memo})

    const res = [];
    for (const query of Q) {
        const c1 = query[0];
        const c2 = query[1];

        const c1_idx = getCharIndex(c1);
        const c2_idx = getCharIndex(c2);

        res.push(memo[c1_idx][c2_idx]);
    }

    return res;
}



// const solution = (S,Q) => {
//     const res = [];
//     const map = new Map(); 
//     const n = S.length;
//     for(let i = 0; i < n; i++) {
//         if(map.get())
//     }
// }

console.log(solution1("abcccacba", [ ['a', 'b'], ['b', 'c'] ])); // Example output: [3, 1]
console.log(solution1("intelliaiassistant", [ ['a', 'i'], ['n', 't'] ])); // Example output: [5, 11]