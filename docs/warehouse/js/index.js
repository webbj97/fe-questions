function equals(a, b) {
    // 基本类型、null、undefined
    if (a === b) return true;
    // Date
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    // 空 或 null
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {
        return a === b;
    }
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    // 属性数量不一致
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => equals(a[key], b[key]))
}

let a = {
    name: 1,
    age: [1, 2, 3, 4]
}
let b = {
    name: 1,
    age: [1, 2, 3]
}
const res = equals(a, b);
console.log('res:', res);