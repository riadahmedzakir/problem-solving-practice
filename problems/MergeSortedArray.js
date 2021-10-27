// Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/


function mergeSortedArray(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let i = m + n - 1;

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1]
            i--;
            p1--
        } else {
            nums1[i] = nums2[p2];
            i--;
            p2--;
        }
    }

    return nums1;
}

function mergeSortedArrayMain() {
    document.writeln(`Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

    document.writeln('<br>');
}