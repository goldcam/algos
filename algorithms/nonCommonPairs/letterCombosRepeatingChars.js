function solution(s) {
    // TODO: Your solution
    // let totalPairs = s.length * (s.length - 1) / 2;
    const n = s.length;
    let charCounts = {};
    for(let i = 0; i < n; i++) {
        let char = s[i];         
        if(!charCounts[char]) {
          charCounts[char] = 1
        } else {
          charCounts[char]++;
        }       
    }

    let totalCount = 0 ;   
    for(let char in charCounts) {
        const count = charCounts[char];
        if(count >= 2 ) {
             const waysToChooseTwoIdentical = (count * (count - 1)) / 2;
             const waysToChooseOneDistinct = n - count;
            totalCount += waysToChooseTwoIdentical * waysToChooseOneDistinct;
        }
    }  
  
    return totalCount;




    //Gemni soultion 
    // const freq = new Map();
    // for (const char of s) {
    //     freq.set(char, (freq.get(char) || 0) + 1);
    // }

    // let totalCombinations = 0;

    // // Step 2: Iterate through the frequencies to calculate combinations.
    // // This loop runs at most 26 times (for each letter of the alphabet),
    // // making it effectively a constant-time operation.
    // for (const charFreq of freq.values()) {
    //     if (charFreq >= 2) {
    //         // Number of ways to choose 2 identical characters (C(f, 2))
    //         const waysToChooseTwoIdentical = (charFreq * (charFreq - 1)) / 2;
            
    //         // Number of ways to choose one distinct character (n - f)
    //         const waysToChooseOneDistinct = n - charFreq;
            
    //         totalCombinations += waysToChooseTwoIdentical * waysToChooseOneDistinct;
    //     }
    // }

    // return totalCombinations;
}

// Example usage
console.log(solution("abcabc"));
console.log(solution("aabbcc"));
console.log(solution("aabbc"));


// Start by counting how many times each character appears in the string. Then think about how to combine these counts to form groups of three letters with exactly two identical and one different. How can you use combinations to count pairs of identical letters? 

// What if you think about pairs of identical characters combined with a different character? How can you use the counts to calculate the number of 3-letter combos with two identical and one distinct character? Try focusing on pairs of identical letters and multiplying by counts of other letters. Want to explore that?