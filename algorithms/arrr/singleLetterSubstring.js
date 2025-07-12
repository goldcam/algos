// function solution(s) {
//     // TODO: implement the function
//     const res = [];
//     const lastOccurrence = new Map();
//     const strLength = s.length;

//     for (let i = 0; i < strLength; ++i) {
//         const letter = s[i];
//         lastOccurrence.set(letter, i);
//     }

//     let size = 0, end = 0;
//     for (let i = 0; i < strLength; ++i) {
//         const letter = s[i];
//         ++size;
//         end = Math.max(lastOccurrence.get(letter), end); 
//         if(i === end) {
//             res.push(size);
//             size = 0; 
//         }
//     }
//     return res;

// }












const take2 = (s) => {

    const stringLength = s.length
    if (stringLength === 0) return [];
    const res = [];
    const lastOcc = new Map();
    for (let i = 0; i < stringLength; ++i) {
        const char = s[i];
        lastOcc.set(char, i);
    }

    let size = 0, end = 0;

    for (let i = 0; i < stringLength; ++i) {
        const char = s[i];
        ++size;
        end = Math.max(lastOcc.get(char), end);

        if (i === end) {
            res.push(size);
            size = 0;        
        }

    }

    return res
}

console.log(take2("abacdcd"));  // Should print [3, 4]
