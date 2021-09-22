# 剑指Offer-03 数组中重复的数字

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

**示例 1：**

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

**限制：**
```
2 <= n <= 100000
```

**代码：排序**

```js
var findRepeatNumber = function (nums) {
    // 数组排序，如果存在重复项，则一定相邻
    const arr = nums.sort((a, b) => a - b);
    // 相邻比较
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return arr[i]
        }
    }
    return false
};
```

**代码：键值对**

十分语义化

```js
var findRepeatNumber = function (nums) {
    let myMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        // 查询
        if (!myMap.has(nums[i])) {
            // 第一次出现的值保存
            myMap.set(nums[i], true)
        } else {
            // 找到重复项
            return nums[i];
        }
    }
};
```