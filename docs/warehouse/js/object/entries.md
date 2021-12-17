# entries

> <b>_entries(object)#</b>

创建一个object对象自身可枚举属性的键值对数组。其排列与使用 for...in 循环遍历该对象时返回的顺序一致

### 参数

* object (Object):  要检索的对象。

### 返回

* (Array): 返回键值对的数组。

### 实现

```js
const _entries = (obj) => {
    const keys = Object.keys(obj);
    const resArray = [];
    for (let i = 0; i < keys.length; i++) {
        const cur = keys[i];
        resArray.push([cur, obj[cur]]);
    }
    return resArray;
};
```

### 测试

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_entries(new Foo);
// => [['a', 1], ['b', 2]]
```