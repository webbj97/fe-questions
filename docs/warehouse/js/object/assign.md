# assign

> <b>_assign(target, ...sources)</b>

**注意：**注意: 这方法会改变 object，参考自[Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

### 参数

* target：目标对象
* sources：源对象

### 返回

* (*): 目标对象。

### 实现

```js
const _assign = function(target, ...sources) {
    sources.forEach((obj) => {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                target[key] = obj[key];
            }
        }
    });
    return target;
};
```

### 例子

```js
function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

const aaaa = { a: 0 };

console.log("a:1", aaaa);
_assign(aaaa, new Foo(), new Bar());
console.log("a:2", aaaa);
```