//  Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// Dynamic programming
// kadane's Algorithm

function maximumSubarray(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(max, nums[i]);
    }

    return max;
};

function maximumSubarrayMain() {
    document.writeln(`Input: [-2,1,-3,4,-1,2,1,-5,4]`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

    document.writeln('<br>');
}