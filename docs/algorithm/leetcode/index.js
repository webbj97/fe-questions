/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
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