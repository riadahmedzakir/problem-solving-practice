// Remove Element
// https://leetcode.com/problems/remove-element/

function removeElement(nums, val) {
    let i = nums.length;

    while (i != -1) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i = nums.length;
        } else {
            i--;
        }
    }

    return nums.length;
};



function removeElementMain() {
    document.writeln("Input: nums = [3,2,2,3], val = 3");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

    document.writeln('<br>');
}