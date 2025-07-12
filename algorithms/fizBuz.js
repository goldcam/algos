const fizzBuzz = n => {
    for(let i = 1; i<= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');             
        }
        else if (i % 3 === 0) {
            console.log('fizz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
            
        }
    }
}

fizzBuzz(30);

// const test = 
// const test2 = fizzBuzz(2);
// const test3 = fizzBuzz(5);
// const test4 = fizzBuzz(15);

// console.log({ test, test2, test3, test4 })
