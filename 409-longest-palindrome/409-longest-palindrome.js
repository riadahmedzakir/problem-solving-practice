/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let charArray = {};
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt(0);
        if (charArray[code]) { charArray[code]++; }
        else { charArray[code] = 1 }
    }

    Object.keys(charArray).forEach(char => {
        const charCount = charArray[char];
        result += parseInt(charCount / 2) * 2;

        if (result % 2 == 0 && charCount % 2 == 1) {
            result++;
        }
    });

    return result;
};