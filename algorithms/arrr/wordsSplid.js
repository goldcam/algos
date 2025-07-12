function solution(s) {
    // TODO: implement
    const words = s.split(/ +/).filter(Boolean);
    const uniqueWords = new Set(words);
    const charBrokenWordCounts = new Map();
    const uniqueCharsInOrder = [];
    const seenCharsInOrderSet = new Set();

    for (const word of uniqueWords) {
        const charsInThisWord = new Set();
        for (const char of word) {
            charsInThisWord.add(char);
        }
        for (const char of charsInThisWord) {            
            charBrokenWordCounts.set(char, (charBrokenWordCounts.get(char) || 0) + 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char !== ' ' && !seenCharsInOrderSet.has(char)) {
            uniqueCharsInOrder.push(char);
            seenCharsInOrderSet.add(char);
        }
    }

    let maxBrokenWords = 0;
    let winningChar = '';

    if (uniqueCharsInOrder.length > 0) {
        winningChar = uniqueCharsInOrder[0];
    }

    for (const charCandidate of uniqueCharsInOrder) {
        const currentBrokenCount = charBrokenWordCounts.get(charCandidate) || 0;        
        if (currentBrokenCount > maxBrokenWords) {            
            maxBrokenWords = currentBrokenCount;
            winningChar = charCandidate;
        }
    }

    return [winningChar, maxBrokenWords];

}

// Example usage:
// const result = solution("go see him ");


const mySolution = (s) => {
    if (s.length === 0) return ['', 0];

    const splitWords = s.split(/ +/).filter(Boolean);
    const uniqueWords = new Set(splitWords);
    const charBrokenWordCounts = new Map();
    const uniqueCharsInOrder = [];
    const seenCharsInOrderSet = new Set();


    for(let word of uniqueWords) {
        const uniqueLetters = new Set();
        for(let char of word) {
            uniqueLetters.add(char);
        }

        for(let char of uniqueLetters) {
            charBrokenWordCounts.set(char, (charBrokenWordCounts.get(char) || 0) + 1);
        }
    }

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char !== ' ' && !seenCharsInOrderSet.has(char)) {
            uniqueCharsInOrder.push(char);
            seenCharsInOrderSet.add(char)
        }

    }




    let maxBrokenWords = 0, winningChar = '';

    if (uniqueCharsInOrder.length > 0) winningChar = uniqueCharsInOrder[0];

    for(let charCandidate of uniqueCharsInOrder) {
        const currentBrokenCount = charBrokenWordCounts.get(charCandidate) || 0; 
        if (currentBrokenCount > maxBrokenWords) {
            maxBrokenWords = currentBrokenCount;
            winningChar = charCandidate
        }
    }

    return [winningChar, maxBrokenWords]


}
const result = mySolution("Hello, world!");
console.log(result); // Expected output: ['l', 2]


//see me fly -> ['e', 2]

//go see him -> ['g', 1]

