// https://leetcode.com/problems/binary-tree-paths/
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    const helper = (root, str) => {
        if(!root) return;
          if (!root.left && !root.right) {
            res.push(str + root.val);
            return;
        }
        let left = helper(root.left, str + root.val + "->");
        let right = helper(root.right, str + root.val + "->");
        // return root;
        
     
    }
    helper(root, '')
    return res;
};