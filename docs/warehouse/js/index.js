// function equals(a, b) {
//     // 基本类型、null、undefined
//     if (a === b) return true;
//     // Date
//     if (a instanceof Date && b instanceof Date) {
//         return a.getTime() === b.getTime();
//     }
//     // 空 或 null
//     if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {
//         return a === b;
//     }
//     const keysA = Object.keys(a);
//     const keysB = Object.keys(b);
//     // 属性数量不一致
//     if (keysA.length !== keysB.length) return false;
//     return keysA.every(key => equals(a[key], b[key]))
// }

// let a = {
//     name: 1,
//     age: [1, 2, 3, 4]
// }
// let b = {
//     name: 1,
//     age: [1, 2, 3]
// }
// const res = equals(a, b);
// console.log('res:', res);
// 输入
const users = [
    { user: 'barney', age: 36, active: false },
    { user: 'fred', age: 40, active: true },
];
// // 输出
// [
//     [{ user: 'fred', age: 40, active: true }],
//     [{ user: 'barney', age: 36, active: false }]
// ]

function grouping(array, pro) {
    if (!Array.isArray(array)) return 'TypeError';
    const trueA = [];
    const failA = [];
    array.forEach(v => {
        if (v[pro]) {
            trueA.push(v)
        } else {
            failA.push(v)
        }
    });
    array = [
        trueA,
        failA
    ];
    return array;
}

const res = grouping(users, 'active');
console.log('res:', res);