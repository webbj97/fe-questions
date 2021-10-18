#剑指 Offer 32 - III. 从上到下打印二叉树 III

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。


例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]
 
 
**代码**

在32-2基础上，之字形输出， 可以由2的结果，添加层数变量，当层数为偶数时，逆序存储即可。

```js
var levelOrder = function(root) {
    if(root == null ) return [];
    let res = [];
    let queue = [];
    queue.push(root);
    let level = 0;  // 层数
    while(queue.length>0){    // 每一轮即为一层
        let tmp = [];
        let len = queue.length;  // 当前层的节点个数
        level++;
        for(let i=0;i<len;i++){
            let cur = queue.shift();
            tmp.push(cur.val);
            if(cur.left){ 
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
        if(level%2 ===0){   // 偶数层将数组逆序
            tmp.reverse();
        }
        res.push(tmp)
    }
    return res;
};
```