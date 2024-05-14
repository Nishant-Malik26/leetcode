
var MyStack = function() {
    this.q1 =[];
    this.q2 =[];
    this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
    this.length++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n =this.length - 1;
    while(n >= 1){
        this.q2.push(this.q1.shift());
        n--;
    }
    const el =  this.q1.shift();
    n =this.length - 1;
while(n){
    this.q1.push(this.q2.shift());
    n--;
}
this.length--;
return el;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     return this.q1[this.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */