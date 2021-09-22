/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} hcead
 * @return {number[]}
 */
var reversePrint = function (head) {
    const arr = [];
    const node = head
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    // 反转
    return arr.reverse();
};