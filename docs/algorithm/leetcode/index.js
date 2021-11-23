/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    if(n){
        n = n + sumNums(n - 1)
    }
    return n;
};