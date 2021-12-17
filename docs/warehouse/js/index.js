const _difference = (array, diff = []) => {
    if (!diff.length || !array.length) return [...array];

    return array.filter((val) => !diff.includes(val));
};

console.log(_difference([3, 2, 1], [4, 2]));
