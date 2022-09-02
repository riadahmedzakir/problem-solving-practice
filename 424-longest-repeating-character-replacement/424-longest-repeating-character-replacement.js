/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let charMap = {};
    let result = 0;
    let left = 0 ;
    
    for(let right=0; right<s.length; right++){
        if(charMap[s[right]]){ charMap[s[right]] += 1; }
        else { charMap[s[right]] = 1; }
    
        
        if((right - left + 1) - Math.max(...Object.values(charMap)) > k){
            charMap[s[left]] -=1;
            left++;
        }
        
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};