/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    if (k == nums.length) { return nums; }

    let repeatationMap = {};
    let freq = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (repeatationMap[nums[i]]) { repeatationMap[nums[i]] = repeatationMap[nums[i]] + 1; }
        else { repeatationMap[nums[i]] = 1; }
    }

    for (let i = 0; i <= nums.length; i++) {
        freq.push([]);
    }

    Object.keys(repeatationMap).forEach(key => {
        freq[repeatationMap[key]].push(parseInt(key));
    });


    for (let i = freq.length - 1; i >= 0; i--) {
        if (result.length != k && freq[i].length) {
            result.push(...freq[i]);
        }
    }
    return result;
};