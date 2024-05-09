// https://leetcode.com/problems/maximize-happiness-of-selected-children/
// Medium
// Commented solution failing for very large array

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    // let sum = 0;
    
    // let helper = (happiness, k) => {
    // if(k === 0){
    //     return;
    // }
    // sum += happiness[0];
    // const hello = happiness.map((el) => {
    //     if(el > 0){
    //         return el - 1;
    //     }else {
    //         return el;
    //     }
    //     });
    // helper(hello.slice(1), k - 1);
    // }
    // happiness.sort((a,b) => b - a)
    //     helper(happiness, k)
    //     return sum;
    
    let sum = 0;
    let times = 0;
    happiness.sort((a,b) => b - a);
    for(let i = 0; i < k;i++){
        sum += Math.max(happiness[i] - times ,0);
        times++
    }
    return sum;
    };
    
    