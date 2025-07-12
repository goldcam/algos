function solution(wordList) {
    // TODO: Implement the function here
    const res = new Map();
    const lastOcc = new Map();

    for(let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        const wordLastPos = lastOcc.get(word);
        if (wordLastPos !== undefined) {
            const distance = i - wordLastPos;
            const lastDistance = res.get(word);
            if(distance < lastDistance || !lastDistance) {
                res.set(word, distance);
            }
            
        }
       lastOcc.set(word, i) 
    }

    return res;
}

// Example usage:
const exampleInput = ["dog", "cat", "bird", "cat", "dog", "elephant", "dog"];
const exampleInput2 = ['frog',"dog", "cat", "dog", "bird", "cat",  "elephant", "dog"];
console.log(solution(exampleInput2)); // Output should be Map { 'dog' => 2, 'cat' => 2 }