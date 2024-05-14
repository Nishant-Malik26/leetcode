// https://leetcode.com/problems/valid-anagram/
// easy

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */



 ////  easier soln
 /*

  bool isAnagram(string s, string t) {
        unordered_map<char, int> count;
        
        // Count the frequency of characters in string s
        for (auto x : s) {
            count[x]++;
        }
        
        // Decrement the frequency of characters in string t
        for (auto x : t) {
            count[x]--;
        }
        
        // Check if any character has non-zero frequency
        for (auto x : count) {
            if (x.second != 0) {
                return false;
            }
        }
        
        return true;
    }

 */




    
var isAnagram = function(s, t) {
    let map1 = {};
    let map2 = {};
 let arr1 = s.split('');
 let arr2 = t.split('');
    while(arr1.length){
     let el = arr1.pop();
     map1[el] = (map1[el] || 0) + 1;
    }
    while(arr2.length){
     let el = arr2.pop();
     map2[el] = (map2[el] || 0) + 1;
    }
 
    for(let key of s.split('')) {
     if(map1[key] !== map2[key]){
 return false;
     }
    }
    for(let key of t.split('')) {
     if(map1[key] !== map2[key]){
 return false;
     }
    }
    return true;
 
 };





