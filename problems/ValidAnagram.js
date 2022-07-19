// Valid Anagram
// https://leetcode.com/problems/valid-anagram/

function validAnagram(s, t) {
    if (s.length !== t.length) { return false; }

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (sMap.hasOwnProperty(s[i])) {
            sMap[s[i]]++
        } else {
            sMap[s[i]] = 1;
        }
        if (tMap.hasOwnProperty(t[i])) {
            tMap[t[i]]++
        } else {
            tMap[t[i]] = 1;
        }
    }
    for (let k in sMap) {
        if (sMap[k] !== tMap[k]) {
            return false;
        }
    }

    return true;
}

function validAnagramMain() {
    document.writeln(`Input: s = "anagram", t = "nagaram"`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(validAnagram("anagram", "nagaram"));

    document.writeln('<br>');
}