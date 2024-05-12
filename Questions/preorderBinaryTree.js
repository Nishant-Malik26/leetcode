// https://leetcode.com/problems/binary-tree-preorder-traversal/
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
var preorderTraversal = function(root) {
    let res = [];
    const helper = (root) => {
        if(!root){
            return null;
        }
        res.push(root.val)
        const left = helper(root.left);
        const right = helper(root.right);

    }
    helper(root);
    return res;
};