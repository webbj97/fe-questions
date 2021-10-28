# 剑指Offer21. 调整数组顺序使奇数位于偶数前面

> **JavaScript剑指Offer题解**<br>
> 🚀<font color=red>包含数组、对象、链表、堆栈、树等经典题型</font>
> ☕️每天一道，轻松不累
> 💬详细的题目解析，<font color=red>收藏</font>方便阅读

### 在线阅读地址

<a href="https://github.com/webbj97/fe-questions/tree/master/docs/algorithm" target="blank">在线阅读地址</a>

### 题目描述

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

**示例：**

```
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
```

## 题解一：遍历

**思路**

1. 顺序遍历
2. 时间复杂度是O(n)

```js
var exchange = function (nums) {
    const res = [];
    // 一次遍历得到偶数数组，并从原数组中剔除
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        if(cur % 2 === 0){
            res.push(cur);
            nums.splice(i, 1);
            i--;
        }
    }
    // 合并结果
    return nums.concat(res);
};
```

## 题解二：二分法

**思路**


* 双指针
* 利用左右指针对满足条件的数字进行交换

```js
var exchange = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let temp = 0;
    while(left < right){
        // 如果左右两指都出现在了错误的位置，就进行交换，否则就进行跳过
        if(nums[left] % 2 === 0 && nums[right] % 2 === 1){
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
        if(nums[left] % 2 === 1){
            left++;
        }
        if(nums[right] % 2 === 0){
            right--;
        }
    }
    return nums;
};

//zy
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let p = 0; let q = nums.length -1;
    while(p<=q){
        if(nums[p]%2 ==0 && nums[q]% 2 ==1){
            [nums[p],nums[q]] = [nums[q],nums[p]];
        }
        if(nums[p] % 2 == 1 ){
            p++;
        }
        if(nums[q] %2 == 0){
            q--;
        }
    }
    return nums;
};
```

**热门开源项目**

* [前端进阶指南](https://github.com/webbj97/summary)
* [高频经典手撕代码实现](https://github.com/webbj97/fe-questions)
* [剑指Offer题解](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)



 