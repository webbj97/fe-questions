# 剑指Offer（39）数组中出现次数超过一半的数字

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。


**示例 1:**

```
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
```

**1.常规统计**

1. 统计每个数组出现的次数
2. 输出出现次数超过数组长度一半的数字

时间复杂度O(n)：遍历一次
空间复杂度O(n)：obj存储

```js
var majorityElement = function (nums) {
    const obj = {};
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const v = nums[i];
        if (!obj[v]) {
            obj[v] = 1;
        } else {
            obj[v]++;
        }
        if (obj[v] * 2 > nums.length) {
            return v;
        }
    }
};
```

**2.数学思路排序**

1. 一个符合条件的数字，数组的中间值一定使它

时间复杂度：取决于排序的时间复杂度
空间复杂度O(1)：常数级别的存储空间

```js
var majorityElement = function (nums) {
    // 排序
    const arr = nums.sort((a, b) => a - b);
    // 返回目标值
    return arr[parseInt(arr.length / 2)];
};
```

**3.投票思想**

在已经确定一定存在一个数字的数量大于数组的一半时，就可以对拼消耗

1. 记录当前的值为暂时的众数
   1. 如果下一个值和当前值一样，则+1
   2. 如果下一个值和当前值不一样，则-1
2. "投票"的结果为0时，则表示之前的投票无效，重新记录下一个值为暂时的众数

```js
var majorityElement = function (nums) {
    let cur = '';
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        // 对冲掉了
        if (sum == 0) {
            cur = ele;
            sum++
        } else {
            // 如果与当前数字相同，就+1，否则就对冲掉1个
            sum += cur === ele ? 1 : -1;
        }
    }
    return cur;
};
```
 
 <comment-comment/> 
 