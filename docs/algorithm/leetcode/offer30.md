# 剑指 Offer 30. 包含min函数的栈

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。


**示例:**

```
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();   --> 返回 0.
minStack.min();   --> 返回 -2.
```

**辅助线**

1. 注意题目要求，时间复杂度为O(1)的几个方法
2. 如果min方法要时O(1)，那么就需要提前维护最小值

```js
var MinStack = function () {
    this.minStack = []; //最小栈
    this.stack = []; //数据栈
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x); // 添加进数据栈
    // 允许重复的最小值进栈，防止出栈时
    if (!this.minStack.length || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x); // 添加进最小栈
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const val = this.stack.pop(); // 出栈 
    if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop(); // 如果恰好出栈了最小值，维护最小栈
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1];
};
```
 
 <comment-comment/> 
 