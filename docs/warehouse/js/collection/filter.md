# some

> <b> _some(function(currentValue,index,arr), thisValue) </b>

创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

### 参数：

* function(currentValue,index,arr):
  * currentValue: 必须。当前元素的值
  * index: 可选。当前元素的索引值
  * arr: 可选。当前元素属于的数组对象
* thisValue: 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

### 返回值

* (Array): 返回通过检查指定数组中符合条件的所有元素
  
### 实现

```js
Array.prototype._filter = function (callback, target = this) {
    const arr = target; // 保存this
    const result = []; // 返回新数组
    const len = arr.length;

    if (len === 0) return []; // 如果为空数组，返回[]

    for (let i = 0; i < len; i++) {
        if (callback(arr[i], i, arr)) result.push(arr[i]); //如果判定条件为true，保存至新数组
    }
    return result; // 返回符合条件的结果
};
```

### 测试

```js
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr._filter((val) => val > 0)) 
// => [ 1, 2, 3, 4, 5, 6 ]
console.log(arr._filter((val) => val > 10)) 
// => []
```
