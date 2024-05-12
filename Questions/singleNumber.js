// https://leetcode.com/problems/single-number/description/
// easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for(let i of nums){
        map[i] = (map[i] || 0) + 1;
    }
    for(let key of Object.keys(map)){
        if(map[key] === 1){
            return key;
        }
    }
};