# 柯里化

> <b>_curry(func)</b>

创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数

### 参数

* func (Function): 用来柯里化（curry）的函数。

### 返回

* (Function): 返回新的柯里化（curry）函数。

### 实现

```js
const _curry = func => {
    // 确定形参长度
    const { length } = func;
    const curried = (...arg) => {
        return (arg.length >= length
            ? func(...arg)
            : (...arg2) => curried(...arg.concat(arg2)))
    }
    return curried;
}
```

### 测试

```js
const abc = function (a, b, c) {
    return [a, b, c];
};

const curried = _curry(abc);

console.log(curried(1)(2)(3));
// => [1, 2, 3]

console.log(curried(1, 2)(3));
// => [1, 2, 3]

console.log(curried(1, 2, 3));
// => [1, 2, 3]
```
