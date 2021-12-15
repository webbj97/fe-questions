# cloneDeep

> <b>_cloneDeep(value)#</b>

深拷贝

### 参数

* value (*): 要深拷贝的值。

### 返回

* (*): 返回拷贝后的值。

### 实现

```js
// by zy 
function shallowCopy(target) {
    if (typeof target === "object" && target != null) {
        const copy = target instanceof Array ? [] : {};
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                copy[key] = target[key];
            }
        }
        return copy;
    }
    return target;
}

function deepCopy(target) {
    if (typeof target === "object" && target != null) {
        const copy = target instanceof Array ? [] : {};
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                copy[key] =
                    typeof target[key] === "object"
                        ? deepClone(target[key])
                        : target[key];
            }
        }
        return copy;
    }
    return target;
}

// by 余光
// 浅拷贝，只复制1层
function shallow(target) {
    if (typeof target === "object" && target != null) {
        const copy = target instanceof Array ? [] : {};
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            copy[key] = target[key];
        }
        return copy;
    }
    // 基本类型，直接返回，在传值的那一刻已经复制了
    return target;
}
// 深拷贝
function deepCopy(target) {
    if (typeof target === "object" && target != null) {
        const copy = target instanceof Array ? [] : {};
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            copy[key] =
                typeof target[key] === "object" ? deepCopy(target[key]) : target[key];
        }
        return copy;
    }
    // 基本类型，直接返回，在传旨的那一刻已经复制了
    return target;
}
```