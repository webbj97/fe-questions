# 节流

> <b> _throttle(func, [wait=0])</b>

创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。

### 参数

* func (Function): 要防抖动的函数。
* [wait=0] (number): 需要延迟的毫秒数。
  
### 返回

* (Function): 返回节流的函数。

### 实现

```js
// by 余光
// 时间戳版
function throttle(fn, wait) {
  let last = 0;
  return function() {
    let cur = Date.now();
    if (cur - last > wait) {
      fn.apply(this, arguments);
      last = cur;
    }
  };
}

// 定时器版
function throttle(fn, wait) {
  let flag = true;
  return function() {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, wait);
  };
}

// by zy
function myThrottle(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) return false;
        timer = setTimeout(() => {
            fn.call(this,...args);
            timer = null;
        },delay)
    }
}
```
