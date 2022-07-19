// Group Anagram
// https://leetcode.com/problems/group-anagrams/

function hashWord(word) {
    const hash = new Array(26).fill(0);
    for (const ch of word) {
        ++hash[ch.charCodeAt(0) - "a".charCodeAt(0)];
    }
    return hash.toString();
}

function groupAnagram(strs) {
    const map = {};

    for (const word of strs) {
        const hash = hashWord(word);
        if (!(hash in map)) {
            map[hash] = [];
        }
        map[hash].push(word);
    }

    console.log(map);

    const groups = [];
    for (const key in map) {
        groups.push(map[key]);
    }

    console.log(groups);
    return groups;
}

function groupAnagramMain() {
    document.writeln(`Input: strs = ["eat","tea","tan","ate","nat","bat"]`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

    document.writeln('<br>');
}