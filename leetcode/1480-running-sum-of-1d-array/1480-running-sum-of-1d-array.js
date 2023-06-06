/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let results = []
    for(let i=0; i< nums.length; i++){
        if(i===0){
            results.push(nums[i])
        }else {
            results.push(results[i - 1] + nums[i])
        }
    }
    return results;
};