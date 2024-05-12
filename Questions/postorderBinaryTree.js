// https://leetcode.com/problems/binary-tree-postorder-traversal/
// easy

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
 if(!root) return [];
 let stack = [];
 stack.push(root)
 while(stack.length > 0) {
     let node = stack.pop();

     res.unshift(node.val);
     if(node.left){
         stack.push(node.left);
     }
     if(node.right){
         stack.push(node.right);
     }
 }
 return res;
};