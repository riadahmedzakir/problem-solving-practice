// Plus One
// https://leetcode.com/problems/plus-one/

function plusOne(digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 <= 9) {
            digits[i] = digits[i] + 1;
            break;
        } else {
            if (i == 0) {
                digits[i] = 0;
                digits.unshift(1)
            } else {
                digits[i] = 0;
            }
        }
    }

    return digits;
};

function plusOneMain() {
    document.writeln(`Input: [1,2,3]`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(plusOne([9, 9, 9]));

    document.writeln('<br>');
}