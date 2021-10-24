// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicatesfromSortedArray(nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
    }

    nums.splice(0, nums.length);

    Object.keys(map).forEach(element => {
        nums.push(parseInt(element));
    });

    nums.sort((a, b) => a - b);

    return nums.length;
};



function removeDuplicatesfromSortedArrayMain() {
    document.writeln("Input: [-1,0,0,0,0,3,3]");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(removeDuplicatesfromSortedArray([-1, 0, 0, 0, 0, 3, 3]));

    document.writeln('<br>');
}