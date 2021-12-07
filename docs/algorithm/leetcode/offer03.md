# 剑指Offer-03 数组中重复的数字

> **JavaScript剑指Offer题解**
> 🚀<span style="color:#fe2c24;">包含数组、对象、链表、堆栈、树等经典题型</span>
> ☕️每天一道，轻松不累
> 💬详细的题目解析，<span style="color:#fe2c24;">收藏</span>方便阅读

### 在线阅读地址
<p style="color: red">
<a style="color: red" href="https://github.com/webbj97/fe-questions/tree/master/docs/algorithm" target="blank">在线阅读地址，star鼓励一下吧</a>
</font>

### 题目描述

在一个长度为`n`的数组``nums`里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

**示例 1：**

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：
2 或 3 
```

**限制：**
```
2 <= n <= 100000
```
### 题解一：排序
**复杂度**

* 时间复杂度：O(nlogn)

**思路：**

* 数组排序，如果存在重复项，则一定相邻

```js
var findRepeatNumber = function (nums) {
    // 数组排序，如果存在重复项，则一定相邻
    const arr = nums.sort((a, b) => a - b);
    // 相邻比较，排序数组内重复项一定相邻
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return arr[i]
        }
    }
    return false
};
```


### 题解二：键值对

**复杂度**

* 时间复杂度O(n)
* 空间复杂度O(n)

**思路**

* 利用哈希的特殊结构，统计每一个数字出现的次数
* 遍历哈希结构的key，返回第一个值大于1的key

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

### 题解三：原地交换

**思路**

* 利用题中长度为n的数组，数字在0~n-1之间这个特性，这是关键，这表示数组的索引和值存在**1对多**的关系
* 如果`arr[i] != i`，那么去访问`arr[arr[i]]`，如果不相等，即`arr[i] != arr[arr[i]]`，将它们俩原地交换
* 如果相等，那说明已经出现过了，则直接返回

我们来带入一下:
```
[2, 3, 1, 0, 2, 5, 3]
i = 0 =>
	(2 != 0 ) 
	nums[0] = 2，nums[2] = 1, 则交换 => [1, 3, 2, 0, 2, 5, 3]
	(1 != 0 ) 
	nums[0] = 1，nums[3] = 0, 则交换 => [3, 1, 2, 0, 2, 5, 3]
	(3 != 0 ) 
	nums[3] = 0，nums[0] = 3, 则交换 => [0, 1, 2, 3, 2, 5, 3]
	(0 == 0)
	i++
	直到遇见i = 4时，nums[4] = 2, nums[nums[4]] === 已经存在 2

```
此时 时间复杂度O(n)，空间复杂度O(1)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        while(nums[i] != i){
            let cur = nums[i];
            if(nums[cur] == nums[i]){
                return nums[i];
            }else{
                nums[i] = nums[cur];
                nums[cur] = cur;
            }
        }
    }
};
```

## 写在最后

本篇是剑指Offer的第一题，俗话说好的合理的数据结构+算法才是写好代码的关键，不妨跟我一起来吧～

**热门开源项目**

* [前端进阶指南](https://github.com/webbj97/summary)
* [高频经典手撕代码实现](https://github.com/webbj97/fe-questions)
* [剑指Offer题解](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)