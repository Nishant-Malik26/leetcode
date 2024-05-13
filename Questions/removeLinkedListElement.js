// https://leetcode.com/problems/remove-linked-list-elements/
// easy

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    while(head !== null) {
        if(head.val === val){
        head = head.next;
        }
        else {
            break;
        }
    }
    
 let temp = head;
    while(temp && temp.next !== null) {
        if(temp.next.val === val){
            if(temp.next.next){
                let temp3 = temp.next
                while(temp3 !== null && temp3.val === val ){
                    temp3 = temp3.next;
                }
            temp.next = temp3;
            }
            else {
                temp.next = null;
            }
        }
            temp = temp.next;
    }
    
   
    return head;
};