# concat

> <b> _concat(array, [values]) </b>

创建一个新数组，将array与任何**数组** 或 **值连**接在一起。

### 参数：

* array (Array): 被连接的数组。
* [values]: 连接的值。

### 返回值

* (Array): 返回连接后的新数组。

### 实现

```js
const _concat = function (array, ...values) {
    const result = [...array];
    values.forEach(val => {
        if (Array.isArray(val)) {
            result.push(...val);
        } else {
            result.push(val);
        }
    })
    return result;
}
```

### 例子

```js
var array = [1];
var other = _concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```
