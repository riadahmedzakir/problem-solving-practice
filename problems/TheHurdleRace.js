// The Hurdle Race
// https://www.hackerrank.com/challenges/the-hurdle-race/problem


function hardleRace(k, height) {
    const maxHeight = Math.max(...height);

    if (maxHeight - k > 0) {
        return maxHeight - k;
    } else {
        return 0;
    }
}

function hardleRaceMain() {
    document.writeln('Input : Array - [ 4,5,6,3,3,1], K - 7<br>');
    document.writeln('Output : ');

    document.writeln(hardleRace(2, [2, 5, 4, 5, 2]));

    document.writeln('<br>');
}