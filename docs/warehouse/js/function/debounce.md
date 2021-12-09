# 防抖

> <b> _debounce(func, [wait=0])</b>

创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。

### 参数

* func (Function): 要防抖动的函数。
* [wait=0] (number): 需要延迟的毫秒数。
  
### 返回

* (Function): 返回新的 debounced（防抖动）函数。

### 实现

```js
// by 余光
function debounce(fn, dely) {
    let timer = null;
    return function () {
        // 重复触发，清除定时器
        clearTimeout(timer);
        // 修正this指向
        timer = setTimeout(() => fn.apply(this, arguments), dely);
    };
}
// by zy
function myDebounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => { fn.call(this, ...args) }, delay);
    }
}
```
