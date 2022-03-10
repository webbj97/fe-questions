const maxSubArray = function(nums) {
    if (!nums.length) {
        return false;
    }
    let i = 1;
    while (i < nums.length) {
        const pre = nums[i - 1];
        let cur = pre + nums[i];
        if (cur > nums[i]) {
            nums[i] = cur;
        } else {
            nums[i] = nums[i];
        }
        i++;
    }
    return Math.max(...nums);
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

const res = maxSubArray(nums);
console.log("res:", res);
