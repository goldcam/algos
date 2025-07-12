const chunk = (arr, size) => {
    const res = [];
    let index = 0; 

    while(index < arr.length) {
        res.push(arr.slice(index, index+size));
        index += size;
    }
    return res;
}


const test = chunk([1,2,3,4, 5,44], 2);


console.log({test});