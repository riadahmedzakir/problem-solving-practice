// Implement strStr()
// https://leetcode.com/problems/implement-strstr/

// KMP - Knuth-morris-pratt algo

// function longestPrefix(str) {
//     const patternTable = [0];
//     let prefixIndex = 0;
//     let suffixIndex = 1;

//     while (suffixIndex < str.length) {
//         if (str[prefixIndex] === str[suffixIndex]) {
//             patternTable[suffixIndex] = prefixIndex + 1;
//             suffixIndex += 1;
//             prefixIndex += 1;
//         } else if (prefixIndex === 0) {
//             patternTable[suffixIndex] = 0;
//             suffixIndex += 1;
//         } else {
//             prefixIndex = patternTable[prefixIndex - 1];
//         }
//     }

//     return patternTable;
// };


// function implementstrstr(haystack, needle) {
//     if (needle.length === 0) {
//         return 0;
//     }

//     let textIndex = 0;
//     let wordIndex = 0;

//     const patternTable = longestPrefix(needle);

//     while (textIndex < haystack.length) {
//         if (haystack[textIndex] === needle[wordIndex]) {
//             if (wordIndex === needle.length - 1) {
//                 return (textIndex - needle.length) + 1;
//             }
//             wordIndex += 1;
//             textIndex += 1;
//         } else if (wordIndex > 0) {
//             wordIndex = patternTable[wordIndex - 1];
//         } else {
//             wordIndex = 0;
//             textIndex += 1;
//         }
//     }

//     return -1;
// };


// Hashmap 

const base = 10;
const prime = 2147483647;

function getCharacterValue(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

function getHash(char, position) {
    return (getCharacterValue(char) * base ** position) % prime;
}

function implementstrstr(haystack, needle) {
    if (!needle) { return 0 }
    if (!haystack) { return -1 }

    const hash = [];
    let neddleHash = 0;
    result = -1

    hash.push(getHash(haystack[0], 0));

    for (let i = 1; i < haystack.length; i++) {
        hash.push(hash[i - 1] + getHash(haystack[i], i));
    }

    for (let i = 0; i < needle.length; i++) {
        neddleHash += getHash(needle[i], i);
    }

    for (let i = 0; i < hash.length; i++) {
        let lookupSubstringIndex = i + (needle.length - 1);
        let currentHashValue = (hash[i - 1]) ? Math.abs((hash[lookupSubstringIndex] - hash[i - 1])) : hash[lookupSubstringIndex];

        if (currentHashValue === neddleHash * (base ** i)) {
            result = i;
            break;
        }
    }
    return result;
}

function implementstrstrMain() {
    document.writeln(`Input: haystack = "hello", needle = "ll"`);
    document.writeln('<br>');
    document.writeln('Output : ');

    // document.writeln(implementstrstr('aaabbbaabbabaaabbabbaabbaabbbaabaababbabaaabbbaabbbbbaabbbaaaaaaababaaaabbbaababababbaaababbabaaaaaabaaaba', 'bbaaaba'));
    document.writeln(implementstrstr('abcddaaa', 'cdda'));

    document.writeln('<br>');
}