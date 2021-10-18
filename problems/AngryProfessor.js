// Angry Professor
// https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
    let studentsPresent = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            studentsPresent++;
        }
    }

    if (studentsPresent >= k) { return 'NO'; }
    else { return 'YES'; }
}

function angryProfessorMain() {
    document.writeln('Input : [-1, -3, 4, 2], k - 3');
    document.writeln('<br>');

    document.writeln('Output : ');
    document.writeln(angryProfessor(3, [-1, -3, 4, 2]));

    document.writeln('<br>');
}