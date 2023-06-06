/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let visited = new Set();
    
    while(!visited.has(n)){            
        visited.add(n);

        n = digitSquareSum(n);
            
        if(n === 1){ return true;}            
    }
    
    return false;
};

var digitSquareSum = function(n){
    let result = 0;
    
    while(n){
        let value = n%10;
        value = value * value;
        result += value;
        
        
        n = parseInt(n/10);
    }
    
    return result;
}