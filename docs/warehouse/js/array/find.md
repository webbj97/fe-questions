# find

> <b> _find(function(currentValue,index,arr), thisValue) </b>

返回通过测试（函数内判断）的数组的第一个元素的值。

### 参数：

* function(currentValue,index,arr):
  * currentValue: 必须。当前元素的值
  * index: 可选。当前元素的索引值
  * arr: 可选。当前元素属于的数组对象
* thisValue: 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

### 返回值

* (Any): 返回通过测试（函数内判断）的数组的第一个元素的值。

### 实现

```js
Array.prototype._find = function (fn, target) {
    const items = target || this;
    for (let i = 0; i < items.length; i++) {
        const cur = items[i];
        const index = i;
        const arr = items;
        if (fn(cur, index, arr)) {
            return cur;
        }
    }
    return undefined;
};
```

### 例子

```js
const ages = [3, 10, 18, 20];

console.log(ages._find((age) => age > 0)) // 3
console.log(ages._find((age) => age > 10)) // 18
```
