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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    removeSubtree(root);
    return root.left == null && root.right == null && root.val == 0 ? null : root;
};


let removeSubtree = function(node){
    if(node == null) { return false; }
    
    let leftContainsOne = removeSubtree(node.left);
    let rightContainsOne = removeSubtree(node.right);
    
    if(!leftContainsOne) { node.left = null; }
    if(!rightContainsOne) { node.right = null; }
    
    return node.val == 1 || leftContainsOne || rightContainsOne;
}