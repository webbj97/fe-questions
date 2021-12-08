# reverse

> <b> _reverse(str)</b>

反转str

### 参数

* str (String): 要修改的字符串。

### 返回

* (String): 返回str.

### 实现

```js
const reverseStr1 = str => str.split('').reverse().join('');

const reverseStr2 = str => {
  let res = '';
  const len = str.length
  for(let i = 0; i < len; i++){
    const index = len - 1 - i;
    res += str[index];
  }
  return res;
}
```
