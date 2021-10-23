// Sparse Arrays
// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem

Object.defineProperties(Array.prototype, {
    count: {
        value: function (query) {
            var count = 0;
            for (let i = 0; i < this.length; i++)
                if (this[i] == query)
                    count++;
            return count;
        }
    }
});

function sparseArrays(strings, queries) {
    const results = [];

    for (let i = 0; i < queries.length; i++) {
        results.push(strings.count(queries[i]));
    }

    return results;
}

function sparseArraysMain() {
    document.writeln("strings : ['ab', 'ab', 'abc'], queries: ['ab', 'abc', 'bc']");
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(sparseArrays(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));

    document.writeln('<br>');
}