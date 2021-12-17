# call

> <b> _apply(context, arg)#</b>

使用一个指定的 this 值和参数数组来调用一个函数

### 参数

* context (*): func 绑定的this对象。
* arg（Array）: 附加的参数数组

### 返回

* (*): 函数执行的结果

### 实现

```js
// 余光
Function.prototype._apply = function (obj = window, arg) {
    const key = Symbol();
    obj[key] = this; // 将函数变成对象的内部属性
    const result = obj[key](...arg); // 执行函数
    delete obj[key]; // 删除函数，当做什么都没发生～
    return result;
};

//zy
Function.prototype.myApply = function (context = window, args) {
    const key = Symbol(); // 防止覆盖原有属性
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
};
```

- Symbol 可以防止覆盖原有属性 👍

### 测试

```js
const consol = function (obj) { console.log(`Hi ${this.name} and ${obj.name}`) }
consol._apply({ name: '小明' }, [{ name: '小红' }]);
// => Hi 小明 and 小红
consol.myApply({ name: '小明' }, [{ name: '小红' }]);
// => Hi 小明 and 小红
```