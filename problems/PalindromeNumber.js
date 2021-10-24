// Palindrome Number
// https://leetcode.com/problems/palindrome-number/

function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--) {

        o += s[i];
    }
    return o;
}


function palindromeNumber(x) {
    let value = x.toString();
    let reversed = reverse(value);

    return (value === reversed) ? true : false;
}

function palindromeNumberMain() {
    document.writeln("Input: -101");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(palindromeNumber(101));

    document.writeln('<br>');
}