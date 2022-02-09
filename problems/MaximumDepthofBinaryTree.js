// Same Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Dfs, recursion

function maxDepth(root) {
    if (root === null) { return 0; }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right);
}


function MaximumDepthofBinaryTree(root) {
    maxDepth(root);
};

function MaximumDepthofBinaryTreeMain() {
    document.writeln(`Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`);
    document.writeln('<br>');
    document.writeln('Output : ');

    let root = new TreeNode(3, null, null);
    let t1node2 = new TreeNode(9, null, null);
    let t1node3 = new TreeNode(20, null, null);
    let t1node4 = new TreeNode(15, null, null);
    let t1node5 = new TreeNode(7, null, null);


    root.left = t1node2;
    root.right = t1node3;
    t1node3.left = t1node4;
    t1node3.right = t1node5;


    document.writeln(MaximumDepthofBinaryTree(root));

    document.writeln('<br>');
}