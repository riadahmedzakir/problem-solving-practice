/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = 0;
    let base = 1;

    for (let i = 0; i <= n; i++) {
        let temp = result;
        result = result + base;
        base = temp;
    }

    return result;
};