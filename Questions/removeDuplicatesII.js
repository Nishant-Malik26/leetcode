// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// med

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2){
        return nums.length;
    }
    let s = 2;

    for (let f = 2; f < nums.length; f++){
        if(nums[f] !== nums[s-2]){
            nums[s] = nums[f];
            s++;
        }
    }
    return s;

};