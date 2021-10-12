

**未完善**

```js
var minNumber = function (nums) {
    const arr = nums.sort((a, b) => +a - +b)
    if (+arr[0] === 0) {
        let i = 1;
        while (i < arr.length && arr[i] == 0) {
            i++;
        }
        arr[0] = arr[i];
        arr[i] = '0';
    }
    return arr.join('')
};

console.log('min:', minNumber([3, 30, 34, 5, 9]));
```