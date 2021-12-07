# bind

> <b> _bind(func, thisArg, [partials])#</b>

创建一个调用func的函数，thisArg绑定func函数中的 this (注：this的上下文为thisArg) ，并且func函数会接收partials附加参数。

### 参数

* context (*): func 绑定的this对象。
* arg: 附加的参数

### 返回

* (Function): 返回新的绑定函数。


### 实现

```js
Function.prototype._bind = function (context, ...arg) {
    const self = this;
    const fBound = function (...childArg) {
        return self.call(context, ...arg, ...childArg)
    }
    fBound.prototype = this.prototype;
    return fBound;
}
```

### 例子

```js
var greet = function (greeting, punctuation) {
    console.log(greeting + ' ' + this.user + punctuation);
};

var object = { 'user': 'fred' };

var bound = greet._bind(object, 'hi');
bound('!');
// => 'hi fred!'
```