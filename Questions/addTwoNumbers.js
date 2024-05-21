/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let i = l1;
    let j = l2;
    let res = new ListNode();
    let k = res;
    let carr = 0;
    let sum;
    while(true){
        if(!i && !j){
            break;
        }
        if(i && j){
        sum = i.val + j.val + carr;
        }
        else if (!i && j){
        sum =  j.val + carr;
        }
        else if (i && !j) {
        sum =  i.val + carr;
        }
        carr=0;
        let modSum = sum % 10;
        if(modSum === sum){
            k.val = sum; 
        }
        else {
                k.val = modSum;
                carr = Math.floor(sum/10);
 
        }
        if((i && i.next) || (j && j.next) && !carr){
        k.next = new ListNode();
        k = k.next;
        }
        else if ((i && i.next) || (j && j.next) || carr) {
         k.next = new ListNode(carr);
        k = k.next;   
        }

        if(i) {
            i=i.next;
        }
        if(j){
            j=j.next;
        }
    }
    return res;
};