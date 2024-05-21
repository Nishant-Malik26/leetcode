// https://leetcode.com/problems/subsets/
// medium

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
  const helper = (nums, up) => {
    if(nums.length === 0){
        res.push(up);
        return;
    }
    let first = nums[0];
    helper(nums.slice(1), [first, ...up]);
    helper(nums.slice(1), up);
  } 
  helper(nums, []);
  return res; 
};