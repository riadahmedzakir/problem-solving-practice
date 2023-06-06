/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let oddIndices = [];
    let evenIndices = [];
    let result = [];
    
    for(i=0;i<nums.length;i++){
        if(i%2 == 0){ evenIndices.push(nums[i]); }
        else{ oddIndices.push(nums[i]); }
    }
    
    oddIndices.sort(function(a,b){ return b-a });
    evenIndices.sort(function(a,b){ return a-b });
    
    
    while(oddIndices.length || evenIndices.length){
        let v1 = evenIndices.shift();
        let v2 = oddIndices.shift();
        if(v1) { result.push(v1); }
        if(v2) { result.push(v2); }
    }
    
    return result;
};