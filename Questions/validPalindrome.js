// https://leetcode.com/problems/valid-palindrome/description/
// easy


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // s.replace/^[a-zA-Z0-9]+$/
   let left =0;
   let right = s.length - 1;
   while(left < right){
    if(!isAlphaNumeric(s.charAt(left))){
        left++;
    }
    else if (!isAlphaNumeric(s.charAt(right))){
        right--;
    }
    else if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()){
        return false;
    }
    else {
right--;
        left++;
    }
    
   }

   return true;

};


function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}