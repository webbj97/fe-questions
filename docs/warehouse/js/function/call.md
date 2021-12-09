# call

> <b> _call(context, ...arg)#</b>

使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数

### 参数

* context (*): func 绑定的this对象。
* arg: 附加的参数列表

### 返回

* (*): 函数执行的结果

### 实现

```js
// 余光
Function.prototype._call = function (context, ...arg) {
    if (typeof this !== "function") {
        throw new Error("what is trying to be bound is not callable");
    }
    const obj = obj || window; // 可以在参数上设置默认值
    obj.func = this; // 这里推荐使用Symbol

    const result = obj.func(...arg); // 执行函数
    delete obj.func; // 删除函数，当做什么都没发生～
    return result;
};
//zy
Function.prototype.myCall = function (context = window, ...args) {
    const key = Symbol(); // 防止覆盖原有属性
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
};
```

- Symbol 可以防止覆盖原有属性 👍

### 例子

```js
const consol = function (obj) { console.log(`Hi ${this.name} and ${obj.name}`) }
consol.myCall({ name: '小明' }, { name: '小红' });
// => Hi 小明 and 小红
consol._Call({ name: '小明' }, { name: '小红' });
// => Hi 小明 and 小红
```