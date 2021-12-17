# flattenDepth

> <b> _flattenDepth( depth) </b>

方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

### 参数：

* depth（Number）: 指定要提取嵌套数组的结构深度，默认值为 1。

### 返回值

* (Any): 返回通过测试（函数内判断）的数组的第一个元素的值。

### 实现

```js
// 余光
Array.prototype._flattenDepth = function (depth = 1) {
    // 获取调用者
    let arr = this;
    // 拍平层数校验
    if (depth < 1) return arr;

    return arr.reduce(
        (prev, next, i, n) => [
            ...prev,
            ...(Array.isArray(next) ? next._flattenDepth(depth - 1) : [next]),
        ],
        []
    );
};

// zy
Array.prototype.myFlat = function (num = 1) {
    if (num < 0) return this;
    let arr = [];
    this.forEach((item) => {
        if (Array.isArray(item)) {
            arr = arr.concat(item.myFlat(--num));
        } else {
            arr.push(item);
        }
    });
    return arr;
};
```

### 测试

```js
const res = [[1], [[2]]];
console.log(res.flat(1))
// => [1, [2]]
console.log(res.flat(2))
// => [1, 2]
```
