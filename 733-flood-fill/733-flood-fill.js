/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let sourceColor = image[sr][sc];
    if(sourceColor == color) { return image; }
    
    let row = image.length;
    let col = image[0].length;
    
    adjacentFill(image, sr, sc, color, row, col, sourceColor);
    return image;
};

var adjacentFill = function(image, sr, sc, color, row, col, sourceColor){
    if(sr<0 || sr>=row || sc<0 || sc>=col){ return; }
    if(image[sr][sc] == color || image[sr][sc] != sourceColor){ return; }
    
    image[sr][sc] = color; 
    
    adjacentFill(image, sr+1, sc, color, row, col, sourceColor);
    adjacentFill(image, sr-1, sc, color, row, col, sourceColor);
    adjacentFill(image, sr, sc+1, color, row, col, sourceColor);
    adjacentFill(image, sr, sc-1, color, row, col, sourceColor);
}