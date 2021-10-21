# 剑指 Offer 25. 合并两个排序的链表

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

**示例1：**

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

**限制：**

0 <= 链表长度 <= 1000

注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/


## 题解一：暴力遍历

**思路：**

1. 将两个链表的数据合并，并排序
2. 重新还原成新的链表

```js
var mergeTwoLists = function (l1, l2) {
    let arr = [];
    const head = new ListNode(null)
    while (l1) {
        arr.push(l1.val)
        l1 = l1.next;
    }
    while (l2) {
        arr.push(l2.val)
        l2 = l2.next;
    }
    // 整合数据
    arr = arr.sort((a, b) => a - b);
    let cur = head;
    arr.forEach(v => {
        const node = new ListNode(v);
        cur.next = node;
        cur = cur.next;
    })
    return head.next;
};
```

## 题解二：双指针

1. 利用排序的这一特点，分别在两个链表中选择相对小的那个

```js
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode(null)
    cur = head;
    while (l1 || l2) {
        if (!l1) {
            cur.next = new ListNode(l2.val)
            l2 = l2.next;
        }else if (!l2) {
            cur.next = new ListNode(l1.val)
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            cur.next = new ListNode(l1.val)
            l1 = l1.next;
        } else {
            cur.next = new ListNode(l2.val)
            l2 = l2.next;
        }
        cur = cur.next;
    }
    return head.next;
};
```