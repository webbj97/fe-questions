# every

> <b> _every(function(currentValue,index,arr), thisValue) </b>

检测数组所有元素是否都符合指定条件

### 参数

* function(currentValue,index,arr):
  * currentValue: 必须。当前元素的值
  * index: 可选。当前元素的索引值
  * arr: 可选。当前元素属于的数组对象
* thisValue: 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

### 返回值

* (Bool): 如果所有元素都通过检测返回 true，否则返回 false。

### 实现

```js
Array.prototype._every = function (callback, target = this) {
    const arr = target;
    const len = arr.length;

    if (typeof callback !== 'function') {
        throw new Error('need a function')
    }

    if (len === 0) return []; // 如果为空数组，返回[]

    for (let i = 0; i < len; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}
```

### 测试

```js
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr._every((val) => val > 0)) // true
console.log(arr._every((val) => val > 10)) // false
```
