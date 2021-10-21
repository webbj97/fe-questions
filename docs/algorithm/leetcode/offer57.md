# 剑指 Offer 57. 和为s的两个数字

输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。


**示例 1：**
```
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
```
**示例 2：**
```
输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
```

**双指针**

1. 递增数组
2. 时间复杂度O(n)
3. 空间复杂度O(1)

```js
var twoSum = function (nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] > target) {
            // 两数之和大于目标值，则减少较大值
            j--;
        } else if (nums[i] + nums[j] < target) {
            // 两数之和小于目标值，则增加较小值
            i++;
        } else {
            return [nums[i], nums[j]]
        }
    }
};
```


**暴力搜索**

!!! 超长数据下直接超时

* 时间复杂度O(n^2)
* 空间复杂度O(n)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const dif = target - nums[i];
        if (nums.includes(dif)) {
            return [nums[i], dif]
        }
    }
};
```


 
 <comment-comment/> 
 