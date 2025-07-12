const maxChar = str => {
    if(str.length <=1) return str;
    let can = str[0], count = 1;
    for(let i of str) {        
        if(can === i) {
            count++;
        } else {
            count--
        }
        if(count === 0) {
            can = i;
            count++
        }        
    }

    return can;
}

const maxCharMap = str => {
    const map = {}; 
    let max = 0,
        maxChar = '';

    for(let char of str) {        
        map[char] = ++map[char] || 1;
    }
    for(let key in map) {
        if(map[key] > max) {
            max = map[key];
            maxChar = key;
        } 
    }


   return maxChar;
}

const test1 = maxChar('aaabbc');
const test2 = maxCharMap('aaaaassszzzzzzzzzzzzz');
console.log({ test1, test2 });