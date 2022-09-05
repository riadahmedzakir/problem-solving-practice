/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let searchValue = target - nums[i];

        let valueExists = nums.indexOf(searchValue);

        if (i !== valueExists && valueExists > -1) {
            result = [i, valueExists];
            break;
        }
    }

    return result;
};