# 剑指Offer-06 从尾到头打印链表
> **JavaScript剑指Offer题解**<br>
> 🚀<font color=red>包含数组、对象、链表、堆栈、树等经典题型</font>
> ☕️每天一道，轻松不累
> 💬详细的题目解析，<font color=red>收藏</font>方便阅读

### 在线阅读地址

<a href="https://github.com/webbj97/fe-questions/tree/master/docs/algorithm" target="blank">在线阅读地址</a>

### 题目描述


输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

**示例 1：**

```
输入：head = [1,3,2]
输出：[2,3,1]
```

### 题解一：遍历

**复杂度**

* 时间复杂度O(n)
* 空间复杂度O(n)


**代码**

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

### 题解二：入栈

**思路：**

* 将链表数据保存至数组中，并逆序打印

**代码**

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



## 写在最后

本篇是剑指Offer的第四题，俗话说好的合理的数据结构+算法才是写好代码的关键，不妨跟我一起来吧～

**热门开源项目**

* [前端进阶指南](https://github.com/webbj97/summary)
* [高频经典手撕代码实现](https://github.com/webbj97/fe-questions)
* [剑指Offer题解](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)

