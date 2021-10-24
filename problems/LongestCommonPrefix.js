// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

function sortByLength(a, b) {
    return a.length - b.length;
}

function longestCommonPrefix(strs) {
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
}

function longestCommonPrefixMain() {
    document.writeln("Input: ['flower','flow','flight']");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(longestCommonPrefix(["abab","aba","abc"]));

    document.writeln('<br>');
}