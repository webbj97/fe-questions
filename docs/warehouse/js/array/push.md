# push

> <b> _push(array, value1, value2, ..., valueX) </b>

向数组末尾添加新项目，并返回新长度。


### 参数：

* array (Array): 要改动的数组
* value1 ... valueX: (必需)要添加的项目。

### 返回值

* (Number): 返回数组的新长度。.

### 实现

```js
const _push = function (array, ...params) {
    const len = array.length;
    for (let i = 0; i < params.length; i++) {
        array[len + i] = params[i]
    }
    return array.length;
};
```

### 例子

```js
const arr = [1, 2, 3];
_push(arr, 4);
console.log(arr)
// => [1, 2, 3, 4]
```
