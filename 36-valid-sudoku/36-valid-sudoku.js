/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rowMap = new Set();
    const colMap = new Set();
    const squareMap = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") {
                continue;
            }
            
            const currentRowValue =  i.toString() + board[i][j].toString()
            const currentColumnValue =  j.toString() + board[i][j].toString()
            const currentSquareValue = (parseInt(i / 3).toString() + parseInt(j / 3).toString()) + board[i][j];
            
            if (rowMap.has(currentRowValue) || colMap.has(currentColumnValue) || squareMap.has(currentSquareValue)) {
                return false;
            }
            
            rowMap.add(currentRowValue);
            colMap.add(currentColumnValue);
            squareMap.add(currentSquareValue);
        }
    }

    return true;
};