// https://leetcode.com/problems/relative-ranks/
// Easy


/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let obj = {
        0 : "Gold Medal",
        1 : "Silver Medal",
        2 : "Bronze Medal",
    }
let modified = {};
    let hello = [...score];
    hello.sort((a,b) => b-a);
    for(let i = 0; i< hello.length; i++){
        modified[hello[i]] = i; 
    }
    // score.sort((a,b) => a-b);
let res = [];
    for(let i = 0 ; i < score.length; i++){
        if(obj[modified[score[i]]]){
            res.push(obj[modified[score[i]]]);
        }
        else res.push((modified[score[i]] +1).toString());
    }
    return res;
};