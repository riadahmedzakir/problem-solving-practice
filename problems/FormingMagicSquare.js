//Forming a Magic Square
// https://www.hackerrank.com/challenges/magic-square-forming/problem

function calculateCost(arr, magic) {
    let cost = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cost += Math.abs(arr[i][j] - magic[i][j]);
        }
    }

    return cost;
}

function formingMagicSquare(s) {
    const possiblemagicsquare = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ];
    let costList = [];

    for (let i = 0; i < possiblemagicsquare.length; i++) {
        costList.push(calculateCost(possiblemagicsquare[i], s));
    }

    const cost = Math.min(...costList);

    return cost;
}

function formingMagicSquareMain() {
    document.writeln('Input : [4, 9, 2], [3, 5, 7], [8, 1, 5]<br>');
    document.writeln('Output : ');

    document.writeln(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]));
    
    document.writeln('<br>');
}