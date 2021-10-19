class BinarySearchTree {
    constructor() {
        this.root = null; // {1} Node 类型的根节点
        this.insert = insert;
        this.search = search;
        this.inOrderTraverse = inOrderTraverse;
        this.preOrderTraverse = preOrderTraverse;
        this.postOrderTraverse = postOrderTraverse;
        this.min = min;
        this.max = max;
    }
}

class Node {
    constructor(key) {
        this.key = key; // 节点值
        this.left = null; // 左侧子节点引用
        this.right = null; // 右侧子节点引用
    }
}

function insert(key) {
    const node = new Node(key);
    if (!this.root) {
        this.root = node; // 根节点
    } else {
        insertNode(this.root, node); // 子节点
    }
}

function insertNode(root, node) {
    if (root.key > node.key) {
        if (!root.left) {
            root.left = node; // 小的放左边
        } else {
            insertNode(root.left, node); // 继续传递
        }
    } else {
        if (!root.right) {
            root.right = node; // 小的放左边
        } else {
            insertNode(root.right, node); // 继续传递
        }
    }
}

function search(key) {
    if (!this.root) {
        return false; // 空树
    }

    return searchNode(this.root, key)
}

function searchNode(node, key) {
    if (!node) {
        return false; // 空节点
    }
    if (node.key > key) {
        return searchNode(node.left, key);
    } else if (node.key < key) {
        return searchNode(node.right, key);
    } else {
        return true;
    }
}

function inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback)
}

function inOrderTraverseNode(node, callback) {
    if (node) {
        // 还有左节点
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
    }
}

function preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback);
}

function preOrderTraverseNode(node, callback) {
    if (node) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
    }
}

function postOrderTraverse(callback) {
    postOrderTraverseNode(this.root, callback);
}

function postOrderTraverseNode(node, callback) {
    if (node) {
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
}

function min() {
    if (!this.root) {
        return null; // 空树
    }
    let node = this.root;
    while (node && node.left) {
        node = node.left;
    }
    return node.key;
}

function max() {
    if (!this.root) {
        return false; // 空树
    }
    let node = this.root;
    while (node && node.right) {
        node = node.right;
    }
    return node.key;
}

function remove() {

}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(11);
bst.insert(2);
bst.insert(1);
bst.insert(0);
console.log('search1:', bst.search(1));
console.log('search2:', bst.search(100));
bst.inOrderTraverse(a => console.log(a));
console.log('------:', );
bst.preOrderTraverse(a => console.log(a));
console.log('------:', );
bst.postOrderTraverse(a => console.log(a));
console.log('min>>', bst.min());
console.log('max>>', bst.max());

function removeNode(node, key) {
    if (node == null) { // {2} 
        return null;
    }
    if(node.key > key){
        node.left = removeNode(node.left, key); // 删除的值在左侧
    }else if(node.key < key){
        node.right = removeNode(node.right, key); // 删除的值在左侧
    }else{
        // 无子节点
        if(!node.left && !node.right){
            node = null;
            return node;
        }
        if(!node.left){
            // 只有右子节点，上移
            node = node.right;
            return node;
        }else if(!node.right){
            // 只有左子节点，上移
            node = node.left;
            return node;
        }
        // 存在左右子节点
        // 左节点，要接在右节点的最左侧
        const min = this.min(node.right); // 找到最小的值
        node.key = min.key;
        node.right = this.removeNode(node.right, min.key);
        return node;
    }
}