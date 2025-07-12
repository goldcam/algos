var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
};
const dups = containsDuplicate([1,2,3,3,3,5])
console.log({ dups })