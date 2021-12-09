function compose(...arg) {
    // 保存参数列表
    return function (x) {
        return arg.reduceRight((p, f) => f(p), x);
    };
}

const a = x => x + 'a';
const b = x => x + 'b';
const c = x => x + 'c';
const d = x => x + 'd';

const res = compose(a, b, c, d);
console.log(res('0'));
// => 0dcba