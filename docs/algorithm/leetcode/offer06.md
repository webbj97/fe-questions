# 剑指Offer-06 从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

**示例 1：**

```
输入：head = [1,3,2]
输出：[2,3,1]
```

**代码：**

时间复杂度O(n)，空间复杂度O(n)

```js
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
    let node = head
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    // 反转
    return arr.reverse();
};
```

**代码：入栈**

时间复杂度O(n)，空间复杂度O(n)

```js
var reversePrint = function (head) {
    const arr = [];
    let node = head
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    // 反转
    const res = [];
    for(let i = 0;i < arr.length; i++){
        res.push(arr.pop());
        i--;
    }
    return res;
};
```

** 递归 **

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    if(head == null) return [];
    else return [...reversePrint(head.next),head.val];
};
```