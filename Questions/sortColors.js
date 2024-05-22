// https://leetcode.com/problems/sort-colors/
// med 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // nums.sort((a,b) => a -b);
    let lo = 0;
    let hi = nums.length - 1;
    let curr = 0;

    while(curr <= hi) {
        if(nums[curr] === 0){
            let temp = nums[curr];
            nums[curr] = nums[lo];
            nums[lo] = temp;
            lo++;
            if(curr < lo){
                curr = lo
            }
        }
        else if (nums[curr] === 2){
            let temp = nums[curr];
            nums[curr] = nums[hi];
            nums[hi] = temp;
            hi--;
        }
        else {
            curr++;
        }
    }
};