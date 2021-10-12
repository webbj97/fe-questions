# 240.二维数组中的查找

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

**示例:**

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。
给定 target = 20，返回 false。
```

**限制：**

0 <= m <= 1000

**代码：**

右上角的值是当前行最大值，当前列最小值，如果目标值小于右上角值，那么只能向左搜索，如果大于右上角值，只能向下搜索，每次可以排除一行或者一列。
最坏需要找m+n次，时间复杂度O(m+n);

```js
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
            // 左移
            y--;
        } else {
            // 下移
            x++;
        }
    }
    return false;
};
```

