/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {
    let result = [];
    createString(root, result);
    
    result.pop();
    result.shift();
    return result.join("");
};

var createString = function(node, result){ 
    if(!node){ return result; }
    
    
    result.push("(");
    result.push(node.val)
    
    if(!node.left && node.right) { result.push("()"); }
    
    createString(node.left, result);
    createString(node.right, result);
    
    result.push(")");    
}