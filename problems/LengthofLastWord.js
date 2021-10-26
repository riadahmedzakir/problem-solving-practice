// Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

function lengthofLastWord(s) {
    s = s.replace(/ +(?= )/g, '').trim();
    const words = s.split(' ');

    return words[words.length - 1].length;
};

function lengthofLastWordMain() {
    document.writeln(`Input: "   fly me   to   the moon  "`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(lengthofLastWord("   fly me   to   the moon  "));

    document.writeln('<br>');
}