// Mini-Max Sum
// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem


// Plus Minus
// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem



function miniMaxSum(arr) {
    const sums = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let value = 0;

        for (let j = 0; j < arr.length; j++) {
            value += arr[j];
        }

        sums.push(value - arr[i]);
    }

    result.push(Math.min(...sums));
    result.push(Math.max(...sums));

    return result;
}

function miniMaxSumMain() {
    document.writeln('Input : [1, 2, 3, 4, 5]');
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(miniMaxSum([1, 2, 3, 4, 5]));

    document.writeln('<br>');
}