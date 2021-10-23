// Two Sum
// https://leetcode.com/problems/two-sum/


function twoSum(nums, target) {
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
}

function twoSumMain() {
    document.writeln("Input: nums = [2,7,11,15], target = 9");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(twoSum([3,2,4], 6));

    document.writeln('<br>');
}