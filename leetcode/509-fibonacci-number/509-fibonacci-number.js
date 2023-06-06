/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0) { return 0; }
    if(n == 1) { return 1; }
    let result = 0;
    let a = 0;
    let b = 1;

    while(n>1){
        result = a + b;
        a = b;
        b = result;
        n--;
    }

    return result;
};