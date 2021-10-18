// Utopian Tree
// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
    let height = 1;

    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            height = height * 2;
        } else {
            height += 1;
        }

    }

    return height;
}

function utopianTreeMain() {
    document.writeln('Input : [0, 1, 4]<br>');
    document.writeln('Output : ');

    document.writeln(utopianTree(4));

    document.writeln('<br>');
}