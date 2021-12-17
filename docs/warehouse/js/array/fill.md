# fill

> <b> _fill(array, value, [start=0], [end=array.length]) </b>

使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

**注意：** 这个方法会改变 array

### 参数

* array (Array): 要填充改变的数组。
* value (*): 填充给 array 的值。
* [start=0] (number): 开始位置（默认0）。
* [end=array.length] (number):结束位置（默认array.length）。

### 返回值

* (Array): 返回 array。

### 实现

```js
const _fill = (array = [], value, start = 0, end = array.length) => {
    const { length } = array;
    // 空数组
    if (!length) return array;
    // 边界
    const ends = end > length ? length : end;
    if (start > end) return array;

    for (let i = start; i < ends; i++) {
        array[i] = value;
    }

    return array;
};
```

### 测试

```js
const array = [1, 2, 3];
_fill(array, "a");
// => ['a', 'a', 'a']

_fill(Array(3), 2);
// => [2, 2, 2]

_fill([4, 6, 8, 10], "*", 1, 3);
// => [4, '*', '*', 10]
```
