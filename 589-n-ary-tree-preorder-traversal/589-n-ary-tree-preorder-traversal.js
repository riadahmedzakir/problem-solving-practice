/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const result = [];
    const stack = [];

    if (root == null) { return result; }

    stack.push(root);

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);

        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }

    }

    return result;
};