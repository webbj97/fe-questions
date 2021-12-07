# 剑指 Offer 53 - II. 0～n-1中缺失的数字

一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 

**示例 1:**
```
输入: [0,1,3]
输出: 2
```
**示例 2:**

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
 
**数学思路**

1. 连续递增的数字每一个都是唯一的
2. 缺失一个数字，可以得到原数组长度 = nums.length + 1
3. 计算愿数组总和 - 当前数组总和 = 缺失数字

* 时间复杂度 O(n)，遍历一次
* 空间复杂度 O(1)，常数个变量

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length + 1; // 
    const a1 = 0; // 首项
    const d = 1; // 公差
    const needSum = n * a1 + n * (n - 1) * d / 2
    const sum = nums.reduce((a, b) => a + b);
    return needSum - sum;
};
```

**暴力求解**

len = 数组长度

1. 首位不为0的数组，一定缺失0
2. 末为不为len的数组，一定缺失len
3. 相邻两位相差2的缺失数字在中间

```js
var missingNumber = function (nums) {
    const len = nums.length;
    // 左右边界
    if (nums[0] !== 0) return 0;
    if (nums[len - 1] !== len) return len;
    // 缺失数字在数组中间
    for (let i = 1; i < len; i++) {
        
        if (nums[i] - nums[i - 1] === 2) {
            return nums[i] - 1;
        }
    }
};
```

**暴力求解**

递增数组，arr[i]!=i 一定是答案

```js
var missingNumber = function(nums) {
    for(let i = 0;i < nums.length;i++){
        if(nums[i] != i )
            return i;
    }
    return nums.length;
};
```

**二分法**

1. 排序数组搜索数字首先想到二分法

```js
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
            // 相等代表右侧递增，无缺失
            left = mid + 1;
        }else{
            // 不等：代表有一个跨了2数字，有缺失
            right = mid - 1;
        }
    }
    // 最终边界会被逼近至最后一个
    return left;
};
```