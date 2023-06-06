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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) { return true; }
    return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};

var valid = function (node, left, right) {
    if (!node) { return true; }

    if (!(node.val < right && node.val > left)) { return false; }

    if ((valid(node.left, left, node.val) && valid(node.right, node.val, right))) {
        return true;
    } else { return false; }
}