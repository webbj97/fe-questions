# pop

> <b> _pop(array) </b>

删除数组的最后一个元素并返回删除的元素。

**注意：**此方法改变数组的长度！


### 返回值

* (any): 返回删除的元素。

### 实现

```js
const _pop = function (array) {
    const result = array[array.length - 1];
    array.length - 1;
    return result;
}
```

### 例子

```js
const sites = ['Google', 'Runoob', 'Taobao', 'Zhihu', 'Baidu'];
 
console.log(pop(sites));
// 输出结果为: "Baidu"
 
console.log(sites);
// 输出结果为: ['Google', 'Runoob', 'Taobao', 'Zhihu']
```
