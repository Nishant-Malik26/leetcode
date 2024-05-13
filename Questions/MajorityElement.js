// https://leetcode.com/problems/majority-element/
// easy
// Boyer-Moore Majority Voting Algorithm


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let el =0
    for(let i = 0; i < nums.length;i++){
        if (count === 0) {
            el = nums[i]
            count = 1;
        }
        else if(el === nums[i]){
        count++;
        }
        else {
        count--;
    }
    }
    return el;

};