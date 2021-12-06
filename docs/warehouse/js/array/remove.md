# remove

> <b> _remove(array, callback)# </b>

移除数组中**callback**返回为真值的所有元素，并返回移除元素组成的数组。

**注意：** filter不同, 这个方法会改变数组 array。

### 参数：


* array (Array): 被连接的数组。
* callback（function）: 判断函数。

### 返回值

* (Array): 返回移除元素组成的新数组。

### 实现

```js
const _remove = function (array, callback) {
    const result = []
  if (!(array != null && array.length)) {
    return result
  }
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
