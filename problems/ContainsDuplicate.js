// Contains duplicate
// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) { return true; }
        map[nums[i]] = true
    }

    return false;
}

function containsDuplicateMain() {
    document.writeln(`Input: nums = [1,2,3,1]`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(containsDuplicate([0, 4, 5, 0, 3, 6]));

    document.writeln('<br>');
}