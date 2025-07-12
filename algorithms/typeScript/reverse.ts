const builtInReverse = (input: string | number): string| number => {
    const isNumber = typeof input === 'number';
    let str = isNumber ? input.toString() : input;    
    const res = str.split('').reverse().join('');
    return isNumber ? parseInt(res) * Math.sign(input) : res;
};

export {

}