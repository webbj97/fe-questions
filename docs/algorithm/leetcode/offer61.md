# 剑指 Offer 61. 扑克牌中的顺子

从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

**示例1**

```
输入: [1,2,3,4,5]
输出: True
```

**示例2**

```
输入: [0,0,1,2,5]
输出: True
```

**排序法**

观察规律，5张的顺子，一定是一个顺序数组，不能有重复，最大和最小之间差距4。

当其中有0充数时，最大和最小(非0)之间应该差距为5以内。


```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let sum0 = 0;
    nums.sort((a,b)=>a-b); // 先排序
    for (let i = 0;i<nums.length;i++){
        if( nums[i] === 0) {  // 寻找第一个非0元素
            sum0 ++;
        }else if(nums[i] == nums[i+1]){
            return false;  // 如果有重复直接不行
        }
    }
    return nums[4] - nums[sum0] < 5
};
```