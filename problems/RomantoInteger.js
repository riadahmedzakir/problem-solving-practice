//  Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

function tomantoInteger(s) {
    const romanToIntegerMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (romanToIntegerMap[s[i]] < romanToIntegerMap[s[i + 1]]) {
            result -= romanToIntegerMap[s[i]];
        } else {
            result += romanToIntegerMap[s[i]];
        }
    }

    return result;
}

function tomantoIntegerMain() {
    document.writeln("Input: MCMXCIV");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(tomantoInteger('MCMXCIV'));

    document.writeln('<br>');
}