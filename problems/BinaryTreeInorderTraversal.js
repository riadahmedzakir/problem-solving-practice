// Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/


function binaryTreeInorderTraversal(root) {
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
}

function binaryTreeInorderTraversalMain() {
    document.writeln(`Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`);
    document.writeln('<br>');
    document.writeln('Output : ');

    let node1 = new TreeNode(1, null, null);
    let node2 = new TreeNode(2, null, null);
    let node3 = new TreeNode(3, null, null);

    node1.right = node2;
    node2.left = node3;

    document.writeln(binaryTreeInorderTraversal(node1));

    document.writeln('<br>');
}