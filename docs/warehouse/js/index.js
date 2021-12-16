const _remove = function(array, callback) {
    const result = [];
    if (!(array != null && array.length)) {
        return result;
    }
    const { length } = array;
    let i = -1;
    const ids = [];
    while (++i < length) {
        const value = array[i];
        if (callback(value, i, array)) {
            result.push(value);
        }
    }

    for (let i = 0; i < result.length; i++) {
        const index = array.indexOf(result[i]);
        array.splice(index, 1);
    }
    return result;
};

var array = [1, 2, 3, 4];
var evens = _remove(array, (n, i) => !(n % 2));

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
