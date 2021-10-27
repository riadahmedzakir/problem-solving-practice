// Same Tree

function sameTree(p, q) {
    if (p === q) { return true };
    if (p === null && q !== null) { return false; };
    if (p !== null && q === null) { return false; };
    if (p.val !== q.val) { return false; }
    return sameTree(p.left, q.left) && sameTree(p.right, q.right);
};

function sameTreeMain() {
    document.writeln(`Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`);
    document.writeln('<br>');
    document.writeln('Output : ');

    let t1node1 = new TreeNode(1, null, null);
    let t1node2 = new TreeNode(2, null, null);
    let t1node3 = new TreeNode(3, null, null);

    t1node1.right = t1node2;
    t1node2.left = t1node3;

    let t2node1 = new TreeNode(1, null, null);
    let t2node2 = new TreeNode(2, null, null);
    let t2node3 = new TreeNode(3, null, null);

    t2node1.right = t2node2;
    t2node2.left = t2node3;

    document.writeln(sameTree(t1node1, t2node1));

    document.writeln('<br>');
}