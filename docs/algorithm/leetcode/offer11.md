# 剑指Offer-11 旋转数组的最小数字

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

**示例 1：**

```
输入：[3,4,5,1,2]
输出：1
```

**示例 2：**

```
输入：[2,2,2,0,1]
输出：0
```

**遍历**

1.顺序遍历，当遇到arr[i+1] < arr[i]时返回arr[i+1]，如果遍历一圈都不是的话则是arr[0]，时间复杂度是O(n)。

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    for(let i= 0;i<numbers.length;i++){
        if(numbers[i]>numbers[i+1]){
            return numbers[i+1];
        }
    }
    return numbers[0]
};
```

**二分法**

2.数组排序相关，可以使用二分法，时间复杂度O(nlogn)

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let left = 0;
    let right = numbers.length -1;
    while(left<right){
        let mid = parseInt((left+right)/2);  //注意js里面需要转化为整数！
        if(numbers[mid]<numbers[right]){  
            right = mid;
        }else if(numbers[mid]> numbers[right]){
            left = mid+1;
        }else{  // 如果相等，分辨不出来，
            right -- ;
        }
    }
    return numbers[left]
};

```
 
 <comment-comment/> 
 