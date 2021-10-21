# 剑指 Offer 22. 链表中倒数第k个节点

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

 

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```


## 题解一：遍历

**思路**

1. 从头到尾统计链表的长度，并得到正向的序号

```js
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
    return cur;
};
```

## 题解二：快慢指针

**思路：**

1. 

```js
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    // 快慢针针
    let i = k;
    let fast = head;
    let slow = head;
    while (i > 0 && fast) {
        fast = fast.next;
        i--;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
```