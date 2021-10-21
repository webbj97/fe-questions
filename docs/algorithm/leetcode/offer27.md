# 剑指 Offer 27. 二叉树的镜像

请完成一个函数，输入一个二叉树，该函数输出它的镜像。


示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
 
 
**代码**

将当前节点的左子树镜像（递归），右子树镜像（递归），再将当前节点的左右子节点对调。
递归的终点是叶子节点。


```js
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(root == null) return null;
    let left = mirrorTree(root.left);
    let right = mirrorTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};
```
 
 <comment-comment/> 
 