const _chunk = function (array, size = 1) {
    const length = array == null ? 0 : array.length;
    if (!length || size < 1) return [];

    const len = Math.ceil(length / size);
    const result = new Array(len);
    let index = -1;
    while (++index < len) {
        const start = size * index;
        result[index] = array.slice(start, size + start)
    }
    return result;
}

const arr = ['a', 'b', 'c', 'd']
console.log(_chunk(arr, 2))
// => [['a', 'b'], ['c', 'd']]

console.log(_chunk(arr, 3))
// => [['a', 'b', 'c'], ['d']]