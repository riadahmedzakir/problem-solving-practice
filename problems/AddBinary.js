// Add Binary
// https://leetcode.com/problems/add-binary/

function addBinary(a, b) {
    let aI = a.length - 1;
    let bI = b.length - 1;
    let carry = 0;
    let total = '';

    while (aI >= 0 || bI >= 0) {
        let aIValue = parseInt(a[aI] ? a[aI] : '0');
        let bIValue = parseInt(b[bI] ? b[bI] : '0');

        let bitsum = (aIValue + bIValue + carry) % 2;

        total = bitsum + total;
        carry = Math.floor((aIValue + bIValue + carry) / 2);

        --aI;
        --bI;
    }

    if (carry) { total = carry + total }

    return total
}

function addBinaryMain() {
    document.writeln(`Input: a = "1010", b = "1011"`);
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(addBinary('1010', '1011'));

    document.writeln('<br>');
}