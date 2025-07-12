var topKFrequent = function (nums, k) {
    const map = {}, 
            output = [];

    for(let i = 0; i< nums.length; i++) {
        const number = nums[i];
        if (Object.hasOwn(map, number)){
            map[number]++
        } else {
            map[number] = 1;
        }
    }

    while(k > 0) {
        let highVal = 0;
        let highKey = '';
        for(let key in map){
            const val = map[key];           
             if(val > highVal) {
                highVal = val;
                highKey = key;                                
            }
        }
        output.push(Number(highKey))
        delete map[highKey]
        k--
    }


    return output
};


const topKFrequent2 = (nums, k) => {
    let counter = new Map();
    nums.forEach(num => {
        counter.set(num, (counter.get(num) || 0) + 1);
    });
    let sorted = Array.from(counter.entries()).sort((a, b) => b[1] - a[1]);
    console.log({ sorted })
    return sorted.slice(0, k).map(entry => entry[0]);
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent2([4, 1, -1, 2, -1, 2, 3], 2)) //[2,-1]

