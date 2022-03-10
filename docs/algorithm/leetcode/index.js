/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x === 0) return 0;
    if (n === 0) return 1;
    let res = 1.0;
    // 处理负数
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    while (n > 0) {
        if (n === 1) {
            res *= x;
        }
        x = x * x; // 底数平方
        n = n >>> 1; // 降幂
    }
    return res;
};

let m = 2,
    n = 3;
console.log(`${m}的${n}次方=`, myPow(m, n));
