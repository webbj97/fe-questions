const _reverse = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const left = i;
        const right = array.length - 1 - i;
        [array[left], array[right]] = [array[right], array[left]];
    }
    return array;
};


const array = [1, 2, 3];

_reverse(array);

console.log(array);