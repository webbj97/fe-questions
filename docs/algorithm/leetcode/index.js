var CQueue = function () {
    this.stock1 = [];
    this.stock2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    console.log('value:', value);
    console.log('this:', this.stock1);
    console.log('aa:', this.stock2);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {

};

var obj = new CQueue()
obj.appendTail(1)

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */


// lass CQueue {
//     Deque < Integer > stack1;
//     Deque < Integer > stack2;

//     public CQueue() {
//         stack1 = new LinkedList < Integer > ();
//         stack2 = new LinkedList < Integer > ();
//     }

//     public void appendTail(int value) {
//         stack1.push(value);
//     }

//     public int deleteHead() {
//         // 如果第二个栈为空
//         if (stack2.isEmpty()) {
//             while (!stack1.isEmpty()) {
//                 stack2.push(stack1.pop());
//             }
//         }
//         if (stack2.isEmpty()) {
//             return -1;
//         } else {
//             int deleteItem = stack2.pop();
//             return deleteItem;
//         }
//     }
// }