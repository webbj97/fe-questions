/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head;
    let prev = null; // 前置节点（新的尾节点）
    while(cur){
        let temp = cur.next; //  承接下一个节点
        cur.next = prev; // 反转方向
        prev = cur; // 更新尾节点
        cur = temp; // 更新当前节点
    }
};

