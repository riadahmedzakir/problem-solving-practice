/**
 * @param {string} s
 * @return {boolean}
 */

var isAlphaNumeric = function (c) {
    let code = c.charCodeAt(0);
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

var isPalindrome = function (s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && !isAlphaNumeric(s[leftPointer])) {
            leftPointer++;
        }
        while (leftPointer < rightPointer && !isAlphaNumeric(s[rightPointer])) {
            rightPointer--;
        }

        if (s[leftPointer].toLowerCase() != s[rightPointer].toLowerCase()) {
            return false
        }
        leftPointer++;
        rightPointer--;
    }

    return true;
};