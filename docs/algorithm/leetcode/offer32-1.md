# 剑指 Offer 32 - I. 从上到下打印二叉树

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

**例如:**

```
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回：

[3,9,20,15,7]
```

## 题解一：BFS


```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(root == null){
        return []
    }
    const res = []; // 结果数组 
    const queue = [];  // 队列，先进先出
    // 存根
    queue.push(root)
    // 一次遍历取一层的元素
    while(queue.length>0){
        const cur = queue.shift();
        res.push(cur.val);
        if(cur.left!=null){
            queue.push(cur.left)
        }
        if(cur.right !=null ){
            queue.push(cur.right)
        }
    }
    return res;
};
```
 
 <comment-comment/> 
 