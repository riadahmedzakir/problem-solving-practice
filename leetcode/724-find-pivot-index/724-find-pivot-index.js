/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftsum = 0;
    let rightsum = 0;
    let sum = 0;
    
    for(let i=0;i<nums.length;i++){ sum += nums[i]; }
    rightsum = sum;
    
    for(let i=0; i<nums.length; i++){        
        rightsum = sum - leftsum - nums[i];
        if(leftsum == rightsum){ return i; }
        leftsum += nums[i];
    }
    
    return -1;
};