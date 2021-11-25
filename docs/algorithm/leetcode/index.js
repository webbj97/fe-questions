/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const compare = [...new Set(nums)].map(v => v * 3).reduce((a, b) => a + b)
    const res = nums.reduce((a, b) => a + b);
    return (compare - res) / 2
};

res = singleNumber([9, 1, 7, 9, 7, 9, 7])

console.log('res:', res);