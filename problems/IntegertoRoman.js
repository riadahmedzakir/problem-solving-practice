// Integer to Roman
// https://leetcode.com/problems/integer-to-roman/


function integertoRoman(num) {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    const result = thousands[parseInt(num / 1000)] + hundreds[parseInt((num % 1000) / 100)] + tens[parseInt((num % 100) / 10)] + units[num % 10];

    return result;
}

function integertoRomanMain() {
    document.writeln("Input: 1994");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(integertoRoman(2));

    document.writeln('<br>');
}