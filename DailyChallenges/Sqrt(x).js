// https://leetcode.com/problems/sqrtx/
// easy
// binary search


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x

let hi = x;
let lo = 0;
let ans=0;
while(lo <= hi){
let mid = Math.floor(lo + (hi - lo) /2);

if(mid * mid > x ){
hi = mid -1;
}
else {
ans = mid;
lo = mid +1;
}
}
return ans;
};