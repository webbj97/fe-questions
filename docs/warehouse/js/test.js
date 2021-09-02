function compose(...arg) {
    // 保存参数列表
    // 按顺序执行并返回结果作为下一次的参数
    return function(x) {
        return arg.reduceRight((p, f) => f(p), x)
    }
}

const add = (x) => x + x;
const mul = (x) => x * x;
const one = (x) => x + 1;

const newFunc = compose(add, mul, one)
console.log(newFunc(2));