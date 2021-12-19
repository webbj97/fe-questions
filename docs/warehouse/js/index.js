const _forEach = (array = [], iteratee) => {
    if (!array.length) return;

    for (let i = 0; i < array.length; i++) {
        iteratee(array[i], i, array);
    }
};

_forEach([1, 2, 3, 4, 5], function(value) {
    console.log(value);
});
