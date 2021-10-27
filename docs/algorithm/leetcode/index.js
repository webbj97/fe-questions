var levelOrder = function (root) {
    if (root == null) return [];
    let res = [];
    let queue = [];
    queue.push(root);
    let level = 0; // 层数
    while (queue.length > 0) { // 每一轮即为一层
        let tmp = [];
        let len = queue.length; // 当前层的节点个数
        level++;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            tmp.push(cur.val);
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }
        if (level % 2 === 0) { // 偶数层将数组逆序
            tmp.reverse();
        }
        res.push(tmp)
    }
    return res;
};