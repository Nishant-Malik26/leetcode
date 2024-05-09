// https://leetcode.com/problems/climbing-stairs/description/
// easy
// dp

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let helper = (n , steps) => {
       if(n < 0){
           return 0;
       }
       if(n === 0){
           return 1;
       }
       if(steps[n] !== -1) return steps[n];

       steps[n] = helper(n-1 , steps) + helper(n-2, steps);
       return steps[n];
       
   }
let steps = new Array(n + 1).fill(-1);
return helper(n, steps)
 
   

};