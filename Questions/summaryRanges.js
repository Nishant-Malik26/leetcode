/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    let start = nums[0];
    for(let i =1; i < nums.length - 1; i++){
        if(nums[i] - nums[i - 1] !== 1){
            // if(nums[i -1] - start === 0){
            //     res.push([start, start])
            // }
            res.push([start, nums[i - 1]]);
            start = nums[i];
        }
    }
    return res;
};


summaryRanges([0,1,2,4,5,7])