# 剑指 Offer 42.连续子数组的最大和

输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

```
示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释:连续子数组[4,-1,2,1] 的和最大，6。
```

## 题解一：动态规划

* 时间复杂度O(n)
* 空间复杂度O(1)

**思路：**

核心思想：`nums[i] = max(nums[i],nums[i-1] + nums[i])`; -->`

最大连续子数组和的，可以通过动态规划来处理，一次保存之前处理的结果，方便下一个动作处理。

因为我们只考虑下一个值与当前和之前的关系，所以可以利用参数数组本身，将空间复杂度降到O(1)。

* 起始状态，i = 0； 连续元素和：nums[i - 1]；
* 动作：i >= 1 时 => 
  * 当前值：nums[i]
  * 连续元素和：nums[i - 1]
  * 判断：Max(nums[i] + nums[i - 1], nums[i - 1])
* 保存

```js
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
```

优化后可以只保留最大和

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    for(let i = 1; i < nums.length ; i++){
        nums[i] = Math.max(nums[i],nums[i-1]+nums[i]);
        res = Math.max(res ,nums[i])
    }
    return res;
};
```