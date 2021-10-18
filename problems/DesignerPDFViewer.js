// Designer PDF Viewer
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPDFViewer(h, word) {
    const charMap = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let maxWordHeight = 0;

    for (let i = 0; i < word.length; i++) {
        let index = charMap.indexOf(word[i]);

        if (h[index] > maxWordHeight) {
            maxWordHeight = h[index];
        }
    }

    return maxWordHeight * word.length;
}

function designerPDFViewerMain() {
    document.writeln('Input : Array - [ 4,5,6,3,3,1], K - 7<br>');
    document.writeln('Output : ');

    document.writeln(designerPDFViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));

    document.writeln('<br>');
}