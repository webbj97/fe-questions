# remove

> <b> _remove(array, callback)# </b>

移除数组中**callback**返回为真值的所有元素，并返回移除元素组成的数组。

**注意：** filter不同, 这个方法会改变数组 array。

### 参数：


* array (Array): 被连接的数组。
* callback（function）: 判断函数。

### 返回值

* (Array): 返回移除元素组成的新数组。

### 实现

```js
const _remove = function (array, callback) {
    const result = [];
    if (!(array && array.length)) {
      return result;
    }
    const index = -1,
        indexes = [],
        length = array.length;
        
    while (++index < length) {
      var value = array[index];
      //在循环中如果符合函数条件，则在result数组中增加该值，并在indexes中记录索引
      if (callback(value, index, array)) {
        result.push(value);
        indexes.push(index);
      }
    }
    // 去除指定位置的元素
    basePullAt(array, indexes);
    return result;
  }
  

```

### 例子

```js
const array = [1,2,3,4];

const evens = _remove(array,n=>n%2==0);

console.log(evens);
// => [2,4]

console.log(array);
// => [1,3]
```
