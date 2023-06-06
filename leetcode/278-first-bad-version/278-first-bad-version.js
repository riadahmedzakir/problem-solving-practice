/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 0;
        let right = n;
        console.log(right)
        while (left < right) {
            let mid = parseInt((left + right) / 2);
            
            if(isBadVersion(mid)){
                right = mid;
            } else { 
                left = mid + 1;
            }
        }
        
        if(left == right && isBadVersion(left)){
            return left;
        }
        
        return -1;
    };
};