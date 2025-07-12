const countVowels = str => {
   const m = str.match(/[aeiou]/gi);
   return m ? m.length : 0; 
};

const vowels2 = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'],
          clean  = str.toLowerCase()
                      .replace(/[\W]/g, "");
    let count = 0;

    for(let l of clean) {
        if (vowels.includes(l)) count++
    }

    return count 
}
    
const test = vowels2('hello dog');
const test2 = countVowels('hello doggie!');
const test3 = countVowels('why gary, why?');

console.log({ test, test2, test3 });