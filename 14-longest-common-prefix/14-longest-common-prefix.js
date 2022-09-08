/**
 * @param {string[]} strs
 * @return {string}
 */

function sortByLength(a, b) {
    return a.length - b.length;
}

var longestCommonPrefix = function(strs) {
    const sortedStrs = strs.sort(sortByLength);
    let result = '';

    for (let i = 0; i < sortedStrs[0].length; i++) {
        let isMatched = false;

        for (let j = 0; j < sortedStrs.length; j++) {
            if (sortedStrs[j][i] === sortedStrs[0][i]) {
                isMatched = true;
            } else {
                isMatched = false;
                break;
            }
        }

        if (isMatched) { 
            result += sortedStrs[0][i];
            isMatched = false;
        } else { break }
    }

    return result; 
};