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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root == null) { return [] }
    
    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.shift();

        if (node.right != null) {
            stack.unshift(node.right);
        }

        if (node.left == null) {
            result.push(node.val);
        } else {
            const leftNode = node.left;
            node.left = null;
            node.right = null;

            stack.unshift(node);
            stack.unshift(leftNode);
        }
        console.log(root);
    }

    return result;
};