lengthOfLastWord = function (s) {
    const arr = s.trimStart().trimEnd().split(' '),
        length = arr.length;

    return arr[length - 1].length;
};


const lengthOfLastWord2 = s => 
    s.trim().split(' ').at(-1).length



const test1 = lengthOfLastWord('    fly me to the moon!   ');
const test2 = lengthOfLastWord(' self high five   ');

console.log({test1, test2});