# equals

- 如果是基本类型，则直接判断
- 如果是 Date 类型，则比较时间戳
- 判断是否是 null 或者 undefined
- 如果是引用类型则递归比较每一个层级的值是否相等

```js
function equals(a, b) {
  // 基本类型、null、undefined
  if (a === b) return true;
  // Date
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  // 空 或 null
  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
    return a === b;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  // 属性数量不一致
  if (keysA.length !== keysB.length) return false;
  return keysA.every((key) => equals(a[key], b[key]));
}
```
