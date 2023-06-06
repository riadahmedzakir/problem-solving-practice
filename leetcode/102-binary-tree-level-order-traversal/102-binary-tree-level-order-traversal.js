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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const result = [];
    const queue = [];

    if (root == null) { return result; }

    queue.push(root);

    while (queue.length) {
        console.log(queue);
        const level = [];
        const length = queue.length;

        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) { queue.push(node.left); }
            if (node.right) { queue.push(node.right); }
        }

        result.push(level);
    }

    return result;
};