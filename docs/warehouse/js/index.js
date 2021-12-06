const _remove = function (array, callback) {
    const result = []
    if (!(array != null && array.length)) {
        return result
    }
    values.forEach(val => {
        if (Array.isArray(val)) {
            result.push(...val);
        } else {
            result.push(val);
        }
    })
    return result;
}