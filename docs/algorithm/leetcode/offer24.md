# 剑指 Offer 24. 反转链表

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

**示例:**

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 
**遍历**

1. 暂存next节点，防止丢失
2. 创建前置节点，并修改当前节点的指向
3. 更新前置节点、当前节点

```js
var reverseList = function(head) {
    let cur = head;
    let prev = null; // 前置节点（新的尾节点）
    while(cur){
        let temp = cur.next; //  承接下一个节点
        cur.next = prev; // 反转方向
        prev = cur; // 更新尾节点
        cur = temp; // 更新当前节点
    }
    return prev;
};
```
