# 剑指 Offer 47. 礼物的最大价值

### 题目描述

在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

**示例1:**

```
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

## 题解(动态规划)

**思路**

方程：
grid[i][j] = max(grid[i-1][j],grid[i][j-1]) + grid[i][j];  (i>0;j>0)

空间复杂度O(1),时间复杂度O(mn);


```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    for(let i = 0 ; i < m ; i++){
        for(let j = 0; j < n ; j++){
            if(i === 0 && j ==0){
                grid[i][j] = grid[i][j];
            }else if(i === 0){
                 grid[i][j] = grid[i][j-1]+ grid[i][j];
            }else if(j ===0 ){
                grid[i][j] = grid[i-1][j]+ grid[i][j];
            }else{
                grid[i][j] = Math.max(grid[i][j-1],grid[i-1][j]) + grid[i][j];
            }
        }
    }
    return grid[m-1][n-1]
};
```

