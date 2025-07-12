/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const  minSubArrayLen =  (target, nums) =>  {
    let l = 0,r = 0,sum = 0,res = 0;
    while(r < nums.length){
        sum += nums[r];
        while(sum >= target) {
            let len = r - l + 1;
            if (res === 0 || len < res) res = len;
            sum -=nums[l];
            l++;
        }
        r++;
    }

    return res;


    // let res = Infinity;
    // if (nums.length === 0) return 0;
    // let lp = 0, total = 0;
    // for (let rp = 0; rp < nums.length; rp++) {
    //     if (nums[rp] === target) return 1;
    //     total += nums[rp];
    //     while (total >= target) {
    //         res = Math.min(lp + rp - 1, res);
    //         total -= nums[lp];
    //         lp++;
    //     }
    // }

    // return res !== Infinity ? res : 0;
};

const sa = minSubArrayLen(7,[2, 3, 1, 2, 4, 3]);
// const sa = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
// const sa = minSubArrayLen(4,
// [1,4,4]);
// const sa = minSubArrayLen(5,
// [2, 3]);


console.log({sa})

const arr = [2,3,4,5,76,7,8,2313,55,6745,1];
const func = (arr) => {
    const arrMap = new Map();
    for(let i of arr){
        arrMap.set(i, (arrMap.get(i) || 0) +1);
    }

    // arrMap.forEach((val, key) => console.log({key, val}));

    return Math.max(...arrMap.keys())
}

console.log(func(arr))