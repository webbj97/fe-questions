# 剑指 Offer 29. 顺时针打印矩阵

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

**示例 1：**


```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

**示例 2：**

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

**注意：**

0 <= matrix.length <= 100
0 <= matrix[i].length <= 100

**模拟方向移动**

1. 模拟方向移动
2. 确认切换方向的边界

```js
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length; // 行数
    const columns = matrix[0].length; // 列数
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false)); // 复制一个相同空间的数组存储访问记录
    const total = rows * columns; // 总数
    const directions = [ {x: 0, y: 1}, {x: 1, y: 0}, {x: 0, y: -1}, {x: -1, y: 0}]; // 左->下->右->上
    let dir = 0; // 初始化方向
    let x = 0, y = 0; // 初始化坐标
    const order = new Array(total).fill(0); // 结果数组
    // 移动
    for (let i = 0; i < total; i++) { 
        order[i] = matrix[x][y]; // 打印
        visited[x][y] = true; // 对应标识记录
        // 下一个坐标是否出界
        const nextx = x + directions[dir].x, 
            nexty = y + directions[dir].y;
            
        if(!(0 <= nextx && nextx < rows && 0 <= nexty && nexty < columns && !visited[nextx][nexty])){
            dir = (dir + 1) % 4; // 4个方向循环
        }
        x += directions[dir].x; // 应用最新方向
        y += directions[dir].y;
    }
    return order
};
```
 
 <comment-comment/> 
 