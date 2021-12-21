# includes

> <b> _includes(collection, value, [fromIndex=0]) </b>

检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。

### 参数

* collection (Array|string): 要检索的集合。
* value (*): 要检索的值。
* [fromIndex=0] (number): 要检索的 索引位置。

### 返回值

* (Boolean): 如果找到匹配的字符串返回 true，否则返回 false。

### 实现

```js
const _includes = function (collection, value, fromIndex = 0) {
    const { length } = collection;
    if (!length) return false;

    let index = fromIndex >= 0 ? fromIndex - 1 : length - 2;
    if (typeof value === 'string') {
        return collection.slice(++index).indexOf(value) !== -1
    } else {
        while (++index < length) {
            if (collection[index] === value) {
                return true
            }
        }
        return false
    }
};
```

### 测试

```js
_includes([1, 2, 3], 1);
// => true

_includes([1, 2, 3], 1, 2);
// => false

_includes('pebbles', 'eb');
// => true
```
