# some

> <b> _some(function(currentValue,index,arr), thisValue) </b>

用于检测数组中的元素是否满足指定条件

### 参数

* function(currentValue,index,arr):
  * currentValue: 必须。当前元素的值
  * index: 可选。当前元素的索引值
  * arr: 可选。当前元素属于的数组对象
* thisValue: 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

### 返回值

* (Bool): 如果数组中有元素满足条件返回 true，否则返回 false。
  
### 实现

```js
Array.prototype._some = function (callback, target = this) {
    const arr = target;
    const len = arr.length;

    if (typeof callback !== 'function') {
        throw new Error('need a function')
    }

    if (len === 0) return []; // 如果为空数组，返回[]

    for (let i = 0; i < len; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
}
```

### 测试

```js
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr._some((val) => val > 5)) // true
console.log(arr._some((val) => val > 10)) // false
```
