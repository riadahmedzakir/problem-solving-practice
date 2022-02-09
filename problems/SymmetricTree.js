// Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
// Dfs, Recursion


function dfs(left, right) {
    if (left === null && right === null) { return true };
    if (left === null || right === null) { return false };
    if (left.val !== right.val) { return false };

    return dfs(left.left, right.right) && dfs(left.right, right.left)
}

function SymmetricTree(root) {
    if (!root) { return true };
    return dfs(root.left, root.right);
};

function SymmetricTreeMain() {
    document.writeln(`Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`);
    document.writeln('<br>');
    document.writeln('Output : ');

    let root = new TreeNode(1, null, null);
    let t1node2 = new TreeNode(2, null, null);
    let t1node3 = new TreeNode(2, null, null);
    let t1node4 = new TreeNode(3, null, null);
    let t1node5 = new TreeNode(4, null, null);
    let t1node6 = new TreeNode(4, null, null);
    let t1node7 = new TreeNode(3, null, null);


    root.right = t1node2;
    root.left = t1node3;
    t2node2.right = t1node4;
    t2node2.left = t1node5;
    t1node3.left = t1node7;
    t1node3.right = t1node6;

    document.writeln(SymmetricTree(root));

    document.writeln('<br>');
}