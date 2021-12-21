# join

> <b> _join(array, [separator=',']) </b>

将 array 中的所有元素转换为由 separator 分隔的字符串。

### 参数

* array (Array): 要转换的数组。
* [separator=','] (string): 分隔元素。

### 返回值

* (string): 返回连接字符串。

### 实现

```js
const _join = (array, separator = ",") => {
    return array.reduce((prev, next) => {
        return prev ? prev + separator + next : prev + next;
    }, "");
};
//zy 
const _join2 = function (array, splitStr) {
    if (array === null || array.length < 1) {
        return ''
    }
    let res = array[0];
    for (let i = 1; i < array.length; i++) {
        res += splitStr + array[i]
    }
    return res;
}
```

### 测试

```js
_join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```
