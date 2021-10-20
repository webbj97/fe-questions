# 剑指 Offer 07. 重建二叉树

> **JavaScript剑指Offer题解**<br>
> 🚀<font color=red>包含数组、对象、链表、堆栈、树等经典题型</font>
> ☕️每天一道，轻松不累
> 💬详细的题目解析，<font color=red>收藏</font>方便阅读

### 在线阅读地址

<a href="https://github.com/webbj97/fe-questions/tree/master/docs/algorithm" target="blank">在线阅读地址</a>

### 题目描述

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

**示例 1:**

```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

**示例 2:**

```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

**限制：**

0 <= 节点个数 <= 5000


### 题解一：递归

**思路：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/a8a2f51cbb8c4ef492749bad5574c79b.png)

1. 前序遍历的第一个元素为根节点
2. 中序遍历的根节点左右分别是左子树的中序遍历和右子树的中序遍历
3. 反复生成新的节点
	* 第一层，根节点为3，左子树长度为1，右子树长度为3
	* 第二层....

```js
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    let root = preorder[0]; // 前序遍历的第一个元素为根节点
    let node = new TreeNode(root); // 确定根节点

    let i = inorder.indexOf(root); // 获取根节点在中序遍历中的位置(用于分割左右子树)

    // 递归
    node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return node
};
```

 ## 写在最后

本篇是剑指Offer的第四题，俗话说好的合理的数据结构+算法才是写好代码的关键，不妨跟我一起来吧～

**热门开源项目**

* [前端进阶指南](https://github.com/webbj97/summary)
* [高频经典手撕代码实现](https://github.com/webbj97/fe-questions)
* [剑指Offer题解](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)