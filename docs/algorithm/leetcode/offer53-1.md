# 剑指Offer 53 - I. 在排序数组中查找数字 I

统计一个数字在排序数组中出现的次数。

**示例 1:**
```
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
```

**示例 2:**

```
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
```

nums 是一个非递减数组

**indexOf API 大法**


```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const left = nums.indexOf(target);
    const right = nums.lastIndexOf(target);
    return left>-1 ? right- left +1 : 0;
};
```

**二分法**

由第一种方法容易想到 找出左边界，右边界，一减就得出结果了。那么这个边界可以使用二分法来找。


 
 <comment-comment/> 
 