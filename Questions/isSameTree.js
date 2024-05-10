// https://leetcode.com/problems/same-tree/
//easy


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // let arr1 = [];
    // let arr2 = [];
    // const traverse = (t) => {
    //     if(t === null){
    //         return [t];
    //     }
    //     let leftSide = traverse(t.left);
    //     let rightSide = traverse(t.right);
    //     return [...leftSide , ...rightSide];
    // }

    // if(traverse(p).toString() === traverse(q).toString()){
    //     return true;
    // }
    // else false;

    if(!p && !q){
        return true;
    }

    if(p && q && p.val === q.val){
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    }
    return false;
};