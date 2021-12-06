> <b> _.pull(array, [values]) </b>

移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。

注意： 


### 参数：

* array (Array): 要修改的数组。
* [values] (...*): 要删除的值。

### 返回值

* (Array): 返回 array.

### 例子

```js
var array = [1, 2, 3, 1, 2, 3];
 
_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
```
