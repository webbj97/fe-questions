/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const len = nums.length;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === mid){
            left = mid + 1;
            // 相等代表右侧递增，不缺失
        }else{
            right = mid - 1; // 右侧缺失
        }
    }
    return left;
};


console.log(':', missingNumber([0]));

// class Solution:
//     def missingNumber(self, nums: List[int]) -> int:
//         i, j = 0, len(nums) - 1
//         while i <= j:
//             m = (i + j) // 2
//             if nums[m] == m: i = m + 1
//             else: j = m - 1
//         return i