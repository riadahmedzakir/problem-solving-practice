// Search Insert Position
// https://leetcode.com/problems/search-insert-position/

// Binary Search

function binarySearch(arr, x, start, end) {
    let mid = Math.floor((start + end) / 2);

    if (start > end) { return -1 };
    if (arr[mid] === x) { return mid };
    if (arr[mid] > x) {
        return binarySearch(arr, x, start, mid - 1);
    } else {
        return binarySearch(arr, x, mid + 1, end);
    }

}

function searchInsertPosition(nums, target) {
    let elementFound = binarySearch(nums, target, 0, nums.length);

    if (elementFound > -1) {
        return elementFound;
    } else {
        nums.push(target);
        nums.sort((a, b) => a - b);
        let shouldBeInsertedAt = binarySearch(nums, target, 0, nums.length);
        return shouldBeInsertedAt;
    }
};

function searchInsertPositionMain() {
    document.writeln(`Input: nums = [1,3,5,6], target = 5`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(searchInsertPosition([1, 3, 5, 6], 2));

    document.writeln('<br>');
}