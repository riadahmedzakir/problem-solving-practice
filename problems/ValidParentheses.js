// Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/



function validParentheses(s) {
    const map = { ")": "(", "}": "{", "]": "[" };
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1] == map[s[i]]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length ? false : true;
}

function validParenthesesMain() {
    document.writeln("Input: (){}[]");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(validParentheses('(){}[]'));

    document.writeln('<br>');
}