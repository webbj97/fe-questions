# 剑指Offer（9）用两个栈实现队列

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数`appendTail`和`deleteHead`，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

**示例 1：**

```
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]

输出：[null,null,3,-1]
```
**示例 2：**

```
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]

输出：[null,-1,null,null,5,2]
```

这道题用Js来完成有些偏离，因为在js中没有队列和栈都是有数组数据结构模拟出来的


**代码**

```js
var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    // 压入栈
    this.stack1[this.stack1.length] = value;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
    }
    if (this.stack2.length) {
        return this.stack2.pop();
    } else {
        return -1;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```
 
 <comment-comment/> 
 