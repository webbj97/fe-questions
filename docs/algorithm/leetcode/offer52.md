# 剑指 Offer 52. 两个链表的第一个公共节点

输入两个链表，找出它们的第一个公共节点。

示例1：

输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

示例2：

输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。




**题解**

吐槽：其实就是两个链表找公共节点，不知道为什么要写得这么复杂，实在没看懂。

技巧：双指针。
假设链表A从头到第一个公共节点的距离是a,链表B从头到第一个公共节点的距离是b,公共节点后面的长度是c（注意这个c可能是0）

1. 指针p遍历链表A，再去遍历列表B，走到公共节点时，走过的长度是 a+c+b
2. 指针q遍历链表B，再去遍历列表A，走到公共节点时，走过的长度是 b+c+a 

这时两个指针走过的距离相等，就能够相遇，相遇的地方就是第一个公共节点。

如果两个指针都走完了AB链表还没相遇，那么他们不会再相遇了，没有公共节点，返回null


```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA, q = headB;
    while(p != q){  
        p = p != null ? p.next : headB;
        q = q != null ? q.next : headA;
    }  
    // 如果没有公共节点，那么p = q = null 时会停下来，返回null
    return q ;
};

```
