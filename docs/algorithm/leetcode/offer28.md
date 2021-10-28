# 剑指 Offer 28. 对称的二叉树

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。


例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

 
**示例 1：**
```
输入：root = [1,2,2,3,4,4,3]
输出：true
```
**示例 2：**
```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

## 题解

**思路：**

1. 左子树的左节点 = 右子树的右节点
2. 任意不满足则不是对称二叉树
3. 父节点相等，则判断左右节点是否相等，并递归到深层


```js
var isSymmetric = function (root) {
    if (!root) return true;

    function isTrue(left, right) {
        if (!left && !right) return true; // 都是空值也是对称
        if (!left || !right) return false; // 有一边不存在则不对称
        if (left.val !== right.val) return false; // 值不相等则不对称
        return isTrue(left.left, right.right) && isTrue(right.left, left.right)
    }
    // 把一个大的问题看成一个小的问题，父节点的对称，要依赖于下一层每一对节点都对称
    return isTrue(root.left, root.right);
};
```