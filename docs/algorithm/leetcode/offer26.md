# 剑指 Offer 26. 树的子结构

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

**例如:**

```
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
```

返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

**示例 1：**

```
输入：A = [1,2,3], B = [3,1]
输出：false
```

**示例 2：**

```
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```

## 题解：递归

**思路：**

判断B是否为A的子结构：

1. 判断A和B是否一致（结构相同），如果是，那么B是A的子结构。
2. 如果不是，判断B是否是A的左孩子或者右孩子的子结构，如果是，那么B是A的子结构，如果不是，那么B不是A的子结构（递归）

判断A和B是否一致：

1. 判断当前B是null？ 那么B一直到叶节点了都匹配上了，返回true
2. 判断当前A是null? 那么A是nullB不是null，此时肯定不匹配 返回false
3. 判断当前A的值和B的值，如果不相等，肯定不匹配，返回false
4. 如果前面通过，则下一步判断A的孩子和B的孩子是否一致。（递归）

```js
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(!A || !B)return false
    // A，B完全相等
    // B是左子树的某一段的子树
    // B是右子树的某一段的子树
    return isSameTree(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B);
};

var isSameTree = function(A,B){
    if(B==null) return true;
    if(A==null) return false;
    if(A.val!=B.val) return false;
    return isSameTree(A.left,B.left) && isSameTree(A.right,B.right)
}
```