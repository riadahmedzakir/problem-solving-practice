// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// Dynamic programming

function climbingStairs(n) {
    let result = 0;
    let base = 1;

    for (let i = 0; i <= n; i++) {
        let temp = result;
        result = result + base;
        base = temp;
    }

    return result;
};

function climbingStairsMain() {
    document.writeln(`Input: 5`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(climbingStairs(5));

    document.writeln('<br>');
}