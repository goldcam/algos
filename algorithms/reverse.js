const reverseStr = str => {    
    let rev = '';
    for (let char of str) {
        rev = char + rev
    }
    return rev;
}


const reverseNum = num => {
    let rev = '',
    str = num.toString()
    for (let n of str){
        rev = n + rev;
    }
    return parseInt(rev) * Math.sign(num)
}

const test1 = reverseStr('hi!');
const test2 = 
reverseNum(901);





const builtInReverse = input => {
    const isNumber = typeof input === 'number';
    let str = isNumber ? input.toString() : input;    
    const res = str.split('').reverse().join('');
    return isNumber ? parseInt(res) * Math.sign(input) : res;
}

const test3 = builtInReverse('momdog');
const test4 = builtInReverse(24002);
const test5 = builtInReverse(-908);



// reverseStr('hiiiii');
console.log({ test1, test2, test3, test4, test5 })