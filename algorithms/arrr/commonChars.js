function commonCharacters(s, letters) {
    // TODO: implement
    const res = [], sSet = new Set(s.split(''));


    for (let letter of letters) {
        if(sSet.has(letter)) res.push(letter);
    }


    return res.sort();
}

// Example usage:
let s = "hello";
let letters = ['h', 'a', 'e', 'i', 'o', 'u'];
console.log(commonCharacters(s, letters));  // Should print: ['e', 'h', 'o']