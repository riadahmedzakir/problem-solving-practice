/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

var topKFrequent = function(words, k) {    
    const map = {};
    const freq = [];
    let result = [];
    
    for(let i=0; i<words.length; i++){
        if(map[words[i]]){ map[words[i]] += 1; }
        else { map[words[i]] = 1; }
    }
    
    
    for (let i = 0; i <= words.length; i++) {
        freq.push([]);
    }

    Object.keys(map).forEach(key =>{
        if(freq[map[key]].length){
            freq[map[key]].push(key);
            freq[map[key]].sort();
        } else { 
            freq[map[key]].push(key);
        }
                
    });
    
    console.log(freq);
    
    for (let i = freq.length - 1; i >= 0; i--) {
        if (result.length != k && freq[i].length) {
            freq[i].forEach(value =>{
                if(result.length != k){
                    result.push(value);     
                }
            });            
        }
    }
    return result;    
};