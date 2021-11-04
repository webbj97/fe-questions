# 剑指 Offer 45. 把数组排成最小的数

输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

**示例1**

```
输入: [10,2]
输出: "102"
```

**示例2**

```
输入: [3,30,34,5,9]
输出: "3033459"
```

**排序**

实际上是用自定义的排序方法将数组进行排序。

拼接字符串x+y < y+x, 那么x应该排在y前面。

至于这个的原因，实在很复杂，可以点击[这里](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/)查看

```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    return nums.sort((a,b)=>{ return (`${a}${b}` - `${b}${a}`)}).join('');
};
```


这个可以吗？？
```js
var minNumber = function (nums) {
    const arr = nums.sort((a, b) => +a - +b)
    if (+arr[0] === 0) {
        let i = 1;
        while (i < arr.length && arr[i] == 0) {
            i++;
        }
        arr[0] = arr[i];
        arr[i] = '0';
    }
    return arr.join('')
};

console.log('min:', minNumber([3, 30, 34, 5, 9]));
```
 
 <comment-comment/> 
 