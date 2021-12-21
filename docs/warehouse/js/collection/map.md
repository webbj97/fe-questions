# map

> <b> _forEach(collection, [iteratee=_.identity])</b>

创建一个数组， value（值） 是iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数`value, index, collection`

### 参数

* collection (Array): 一个用来迭代的集合。
* [iteratee=_.identity] (Function): 每次迭代调用的函数。

### 返回值

* (Array): 返回新的映射后数组。

### 实现

```js
const _map = (array = [], iteratee) => {
    const { length } = array;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        result[i] = iteratee(array[i], i, array);
    }
    return result;
};
```

### 测试

```js
console.log(_map([1, 2, 3, 4, 5], (val) => val + 1));
// => [2, 3, 4, 5, 6]
```
