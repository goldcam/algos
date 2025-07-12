const steps = n => {
    for(let i = 1; i <= n ; i++){
        let  spaces = n - i;
        console.log(`'${'#'.repeat(i)}${' '.repeat(spaces)}'`);
    }
}

const test1 = steps(9); 
// '#  '
// '## '
// '###'


console.log(test1); 

