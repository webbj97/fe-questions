# 睡眠函数

> <b> sleep(wait)</b>

创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。

### 参数

* [wait=0] (number): 需要延迟的毫秒数。
  

### 实现

```js
// settimeout 并不会完美的sleep
function sleep(callback, wait) {
    setTimeout(callback, wait);
}

console.log("1");
sleep(() => {
    console.log("结束沉睡");
}, 3000);
console.log("2");

function sleep(wait) {
    return new Promise((resolve) => setTimeout(resolve, wait));
}

async function test() {
    console.log('1');
    await sleep(3000);
    console.log('2');
}
```


### 测试

```js
async function test() {
    console.log('1');
    await sleep(3000);
    console.log('2');
}
// 1
// 3s....
// 2
```