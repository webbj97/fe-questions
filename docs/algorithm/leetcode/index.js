/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}
var getKthFromEnd = function (head, k) {
    // 快慢针针
    let i = 0;
    let cur = head;
    while (cur) {
        cur = cur.next;
        i++;
    }
    const index = i - k; //正序
    i = 0;
    cur = head;
    while (i !== index && cur) {
        cur = cur.next;
        i++;
    }
    return cur
};

res = getKthFromEnd(head, 1)
console.log('res:', res);