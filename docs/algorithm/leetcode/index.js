var buildTree = function (preorder, inorder) {

};




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