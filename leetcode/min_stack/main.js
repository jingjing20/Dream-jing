// 设计一个栈 Stack
// 支持push pop top?
//获取最小值
function MinStack() {
    this.stack = [];    //使用数组模拟栈
    this.min = Number.MAX_VALUE;
}

MinStack.prototype.push = function(jing) {
    if(jing < this.min) {
        this.min = jing;
    }
    return this.stack.push(jing);
}

MinStack.prototype.pop = function() {
    const jing = this.stack.pop();
    return jing;
}

MinStack.prototype.toString = function() {
   return this.stack.join(',');
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
    return this.min;
}

var stack = new MinStack();
stack.push(2);
stack.push(5);
stack.push(8);
console.log(stack.toString());
console.log(stack.getMin());