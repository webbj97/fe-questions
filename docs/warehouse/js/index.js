var num1 = ['a', 'b', 'c'],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

Array.prototype._concat = function (...arg) {
    const arr = this; // 当前数组别名
    if (!arg.length) {
        return [...arr]; // 如果没有参数，则返回数组的浅拷贝
    }
    // ES6为我们的实现提供了更优雅的方式
    if (arg.length >= 1) {
        let res = arg.reduce((prev, next, i, j) => [
            ...prev,
            ...(Array.isArray(next) ? next : [next])
        ], []);
        // 参数是一个数组
        return [...arr, ...res]
    } else {
        // 参数是逗号分隔的参数列表
        return [...arr, ...arg]
    }
}


console.log(num1._concat(1, [2, 3]))
console.log(num1.concat(1, [2, 3]))