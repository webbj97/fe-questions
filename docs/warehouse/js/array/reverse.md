# reverse

> <b> _reverse(array)</b>

反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。

**注意：**这个方法会改变原数组 array，基于Array#reverse.
### 参数

* array (Array): 要修改的数组。

### 返回

* (Array): 返回 array.

### 实现

```js
const _reverse = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const left = i;
        const right = array.length - 1 - i;
        [array[left], array[right]] = [array[right], array[left]];
    }
    return array;
};

```

### 例子

```js
const array = [1, 2, 3];
 
_reverse(array);
 
console.log(array);
// => [3, 2, 1]
```