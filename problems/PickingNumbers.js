// Picking numbers
// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
    let duplicateNumberCounts = Array(101).fill(0);
    let result = -999999;    

    for (let i = 0; i < a.length; i++) {
        let index = a[i];

        duplicateNumberCounts[index]++;
    }

    for (let i = 0; i < duplicateNumberCounts.length; i++) {
        if (result < duplicateNumberCounts[i] + duplicateNumberCounts[i - 1]) {
            result = duplicateNumberCounts[i] + duplicateNumberCounts[i - 1];
        }
    }

    return result;
}

function pickingNumbersMain() {
    document.writeln('Input : [ 4,5,6,3,3,1]<br>');
    document.writeln('Output : ');

    document.writeln(pickingNumbers([4, 5, 6, 3, 3, 1]));

    document.writeln('<br>');
}