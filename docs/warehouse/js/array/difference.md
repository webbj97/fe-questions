# difference

> <b> _difference(array, [values]) </b>

创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。返回过滤的新数组

### 参数

* array (Array): 被过滤的数组。。
* [values] (...Array): 排除的值。

### 返回值

* (Array): 返回一个过滤值后的新数组。

### 实现

```js
const _difference = (array, diff = []) => {
    if (!diff.length || !array.length) return [...array];

    return array.filter((val) => !diff.includes(val));
};
```

### 测试

```js
_difference([3, 2, 1], [4, 2]);
// => [3, 1]
```
