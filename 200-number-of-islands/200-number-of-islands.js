/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid) { return 0; }
    const row = grid.length;
    const col = grid[0].length;
    let islands = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == "1") {
                bfs(grid, i, j, row, col);
                islands++;
            }
        }
    }
    
    return islands;
};

var bfs = function (grid, i, j, row, col) {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] != '1') { return; }

    grid[i][j] = '2';

    bfs(grid, i + 1, j, row, col);
    bfs(grid, i, j + 1, row, col);
    bfs(grid, i - 1, j, row, col);
    bfs(grid, i, j - 1, row, col);
}