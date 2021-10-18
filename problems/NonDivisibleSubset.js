// Non-Divisible Subset
// https://www.hackerrank.com/challenges/non-divisible-subset/problem
var infinity = -9999999999999999999;

function nonDivisibleSubset(k, s) {
    let map = {};
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        const mod = s[i] % k;

        if (map[mod]) {
            map[mod] += 1;
        } else {
            map[mod] = 1;
        }
    }

    if (map[0] > 0) { ans++ }

    for (let i = 0; i < k; i++) {
        if (map[i] == 0) { continue }
        if (i + i == k) {
            ans++;
        } else {
            let x = 0;
            if (!map[i] && !map[k - i]) {
                x = 0;
            } else {
                x = Math.max(map[i] ? map[i] : infinity, map[k - i] ? map[k - i] : infinity);
            }

            ans += x;
            map[i] = 0;
            map[k - i] = 0;
        }
    }

    return ans;
}

function nonDivisibleSubsetMain() {
    document.writeln('Input : [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436], k - 7');
    document.writeln('<br>');

    document.writeln('Output : ');
    document.writeln(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));

    document.writeln('<br>');
}