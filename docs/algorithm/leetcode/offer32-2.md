# 剑指 Offer 32 - II. 从上到下打印二叉树 II

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。


**例如:**
```
给定二叉树:[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
```


**代码**

相当于层次遍历，但是每一层输出在一个数组中。

```js
var levelOrder = function(root) {
    if(root == null ) return [];
    let res = [];
    let queue = [];
    queue.push(root);
    while(queue.length>0){    // 每一轮即为一层
        let tmp = [];
        let len = queue.length;  // 当前层的节点个数
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
        res.push(tmp)
    }
    return res;
};
```
 
 <comment-comment/> 
 