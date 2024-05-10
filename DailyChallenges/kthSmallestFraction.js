/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    const res = [];
    for(let i =0; i< arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            res.push([arr[i] , arr[j]]);
        }
    }

    res.sort((a, b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0];
        }
        else if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        else {
            return (a[0] * b[1]) - (b[0] * a[1]);
        }
    });
    return res[k - 1];

};


