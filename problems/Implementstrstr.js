// Implement strStr()
// https://leetcode.com/problems/implement-strstr/

// KMP - Knuth-morris-pratt algo

function longestPrefix(str) {
    const patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < str.length) {
        if (str[prefixIndex] === str[suffixIndex]) {
            patternTable[suffixIndex] = prefixIndex + 1;
            suffixIndex += 1;
            prefixIndex += 1;
        } else if (prefixIndex === 0) {
            patternTable[suffixIndex] = 0;
            suffixIndex += 1;
        } else {
            prefixIndex = patternTable[prefixIndex - 1];
        }
    }

    return patternTable;
};


function implementstrstr(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    let textIndex = 0;
    let wordIndex = 0;

    const patternTable = longestPrefix(needle);

    while (textIndex < haystack.length) {
        if (haystack[textIndex] === needle[wordIndex]) {
            if (wordIndex === needle.length - 1) {
                return (textIndex - needle.length) + 1;
            }
            wordIndex += 1;
            textIndex += 1;
        } else if (wordIndex > 0) {
            wordIndex = patternTable[wordIndex - 1];
        } else {
            wordIndex = 0;
            textIndex += 1;
        }
    }

    return -1;
};

function implementstrstrMain() {
    document.writeln(`Input: haystack = "hello", needle = "ll"`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(implementstrstr('aaaaaaaaaaaabbba', 'abbba'));

    document.writeln('<br>');
}