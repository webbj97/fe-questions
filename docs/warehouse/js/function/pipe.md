# 组合函数

> <b> pipe(func, ...) </b>

是函数式编程中使用较多的一种写法, 通过 compose 的方式组合函数, 将外部数据依次通过各个函数的加工，生成结果。

即可以将需要嵌套执行的函数平铺。

**注意：** 参数是从左往右执行的

### 参数

* (Function): 依次处理的一个或多个函数

### 返回值

* (*): 运算后的结果

### 实现

```js
function pipe(...arg) {
    // 保存参数列表
    return function (x) {
        return arg.reduce((p, f) => f(p), x);
    };
}
```

### 例子

```js
const a = x => x + 'a';
const b = x => x + 'b';
const c = x => x + 'c';
const d = x => x + 'd';

const res = pipe(a, b, c, d);
console.log(res('0'));
// => 0abcd
```