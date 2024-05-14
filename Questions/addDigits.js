// https://leetcode.com/problems/add-digits/
// easy

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0 ) return 0;
    while(num > 0){
        let sum = 0;
        let n = num;
        while(n > 0) {
            sum = sum + (n % 10);
            n = Math.floor(n /10);
        }
        if((sum % 10) === sum){
            return sum;
        }
        num = sum;
    }
};

