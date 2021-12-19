# forEach

> <b> _forEach(collection, [iteratee=_.identity])</b>

调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index, collection)。 
### 参数：

* collection (Array): 一个用来迭代的集合。
* [iteratee=_.identity] (Function): 每次迭代调用的函数。

### 返回值

* (*): 无

### 实现

```js
const _forEach = (array = [], iteratee) => {
    if (!array.length) return;

    for (let i = 0; i < array.length; i++) {
        iteratee(array[i], i, array);
    }
};
```

### 测试

```js
_forEach([1, 2, 3, 4, 5], function(value) {
    console.log(value);
});
// => 1 2 3 4 5
```
