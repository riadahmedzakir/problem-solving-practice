/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let row = grid.length;
    let column = grid[0].length;
    let result = [...Array(column).keys()];

    for(let i = 0; i < row; i++){
        for(let j=0; j<column; j++){
            let current = result[j];
            if(current === -1){ continue; }
            let next = current + grid[i][current];            
            if(next <0 || next >= column || grid[i][next] == -grid[i][current]){
                result[j] = -1;
                continue;
            }
            result[j] += grid[i][current]
        }        
    }
    
    return result;
};