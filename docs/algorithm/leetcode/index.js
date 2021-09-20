/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

var searchMatrix = function (matrix, target) {
    // 边界校验
    if (matrix === null || !matrix.length || !matrix[0].length) return false;
    // m * n
    const rows = matrix.length;
    const columns = matrix[0].length;
    // 从右上角开始，因为他是边界值，即他的左侧较小，下一行的值较大
    let x = 0;
    let y = columns - 1;
    while (x < rows && y >= 0) {
        const cur = matrix[x][y];
        if (cur === target) return true;
        if (cur > target) {
            y--;
        } else {
            x++;
        }
    }
    return false;
};

console.log(searchMatrix([
    [0, 0]
], 0))