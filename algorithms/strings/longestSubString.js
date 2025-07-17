/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // make a map for adding the index of letters
    // make var left as 0. and max as 0.
    // loop the s
    // if the i is not in map, add to map with the index and
    // find max - with checking ((i-left+1), max) - window.
    // if , i is in map && map.get(i) < left
    // move left++. and update the index.
    // return max after loop.
    let l = 0;
    let maxCount = 0;

    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= l) {
            l = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
        maxCount = Math.max(maxCount, i - l + 1);
    }

    return maxCount;



    //0(n^2)
    // let l = 0, res = 0, charSet = new Set();
    // if (s.length < 2) return s.length;

    // for (let r in s) {
    //     while (charSet.has(s[r])) {
    //         charSet.delete(s[l])
    //         l++;
    //     }
    //     charSet.add(s[r]);
    //     res = Math.max(res, r - l + 1);
    // }
    // return res;
};

const lls = lengthOfLongestSubstring("abcabcbb"); 
// const lls = lengthOfLongestSubstring("");
console.log({lls}) // -> 3




function longestSubstringWithKDistinctCharacters(s, K) {
    let l = 0, maxCount = 0, map = new Map();
    for (let i = 0; i < s.length; i++) {
        const rightChar = s[i], leftChar = s[l];
        
        if(map.has(rightChar)) {
            map.set(rightChar, map.get(rightChar) + 1)
        } else {
            map.set(rightChar, 1);
        }
        while(map.size > K) {
             map.set(leftChar, map.get(leftChar) - 1)
             if(map.get(leftChar) === 0){
                map.delete(leftChar);
            }
            l++;
        }
        maxCount = Math.max(maxCount, i - l + 1);

    }

    return maxCount;    
}

// Example usage:
console.log(longestSubstringWithKDistinctCharacters("acaabcc", 2)); // Expected output: 4
console.log(longestSubstringWithKDistinctCharacters("abaccc", 2)); // Expected output: 4
console.log(longestSubstringWithKDistinctCharacters("aa", 1)); // Expected output: 2
console.log(longestSubstringWithKDistinctCharacters("abaccc", 2)); // Expected output: 4
console.log(longestSubstringWithKDistinctCharacters("abaccccc", 2)); // Expected output: 6

