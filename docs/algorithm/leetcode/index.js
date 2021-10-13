/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] > target) {
            j--;
        } else if (nums[i] + nums[j] < target) {
            i++;
        } else {
            return [nums[i], nums[j]]
        }
    }
};

console.log('twoSum():', twoSum([10, 26, 30, 31, 47, 60], 40));