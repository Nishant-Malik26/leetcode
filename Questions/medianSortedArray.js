//https://leetcode.com/problems/median-of-two-sorted-arrays/
// hard

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newArr = [...nums1, ...nums2]
    newArr.sort((a, b) => a-b);
    let mid = Math.floor(newArr.length / 2);
    if (newArr.length % 2 === 0) {
        return (newArr[mid-1] + newArr[mid]) / 2;
    } else {
        return newArr[mid];
    }
    //     if(newArr[mid] < t){
    //         lo = mid + 1;
    //     }
    //     else if (newArr[mid] > )
    // }

    return mid;
};