// SqrtX
// https://leetcode.com/problems/sqrtx/

// Binary search

function sqrtX(x) {
    if (x === 0) { return 0; }

    let left = 1;
    let right = x;
    let result = Math.floor((left) / 2);

    while (left <= right) {
        let y = result * result;

        if (y === x) {
            break;
        } else if (y < x) {
            left = result + 1;
        } else if (y > x) {
            right = result - 1;
        } 

        result = Math.floor((left + right) / 2);
    }

    return result
}

function sqrtXMain() {
    document.writeln(`Input: 8`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(sqrtX(17));

    document.writeln('<br>');
}