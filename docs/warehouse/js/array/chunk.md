# chunk

> <b> _chunk(array, [size=1])</b>

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

### 参数

* array (Array): 需要处理的数组
* [size=1] (number): 每个数组区块的长度

### 返回

* (Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。

### 实现

```js
const _chunk = function (array, size = 1) {
    const length = array == null ? 0 : array.length;
    if (!length || size < 1) return [];

    const len = Math.ceil(length / size);
    const result = new Array(len);
    let index = -1;

    while (++index < len) {
        const start = size * index;
        result[index] = array.slice(start, size + start)
    }
    return result;
}
```

### 测试

```js
const arr = ['a', 'b', 'c', 'd']
_chunk(arr, 2);
// => [['a', 'b'], ['c', 'd']]
 
_chunk(arr, 3);
// => [['a', 'b', 'c'], ['d']]
```