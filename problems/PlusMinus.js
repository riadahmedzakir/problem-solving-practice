// Plus Minus
// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem



function plusMinus(arr) {
    let positiveIntegers = 0;
    let negativeIntegers = 0;
    let zeroS = 0;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeIntegers++;
        } else if (arr[i] == 0) {
            zeroS++;
        } else {
            positiveIntegers++;
        }
    }

    result.push((positiveIntegers / arr.length).toFixed(6));
    result.push((negativeIntegers / arr.length).toFixed(6));
    result.push((zeroS / arr.length).toFixed(6));

    return result;
}

function plusMinusMain() {
    document.writeln('Input : [1, 1, 0, -1, -1]');
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(plusMinus([1, 1, 0, -1, -1]));

    document.writeln('<br>');
}