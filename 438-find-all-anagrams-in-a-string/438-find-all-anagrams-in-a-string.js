/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (s.length < p.length) { return []; }

    let pMap = {};
    let sMap = {};
    let result = [];

    for (let i = 0; i < p.length; i++) {
        let pValue = p[i];
        let sValue = s[i];

        if (pMap[pValue]) { pMap[pValue] += 1; }
        else { pMap[pValue] = 1; }

        if (sMap[sValue]) { sMap[sValue] += 1; }
        else { sMap[sValue] = 1; }
    }

    if(objectEquals(sMap, pMap)){ result.push(0); }
    
    console.log(result);

    let left = 0;

    for (let right = p.length; right < s.length; right++) {
        if(sMap[s[right]]) { sMap[s[right]] +=1; }
        else { sMap[s[right]] = 1; }
        sMap[s[left]] -= 1;
        
        if(sMap[s[left]] == 0){ 
            delete sMap[s[left]];
        }
        
        left++;
        if(objectEquals(sMap, pMap)){ result.push(left); }
    }
    
    return result;
};

function objectEquals(obj1, obj2) {
    for (var i in obj1) {
        if (obj1.hasOwnProperty(i)) {
            if (!obj2.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    for (var i in obj2) {
        if (obj2.hasOwnProperty(i)) {
            if (!obj1.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    return true;
}