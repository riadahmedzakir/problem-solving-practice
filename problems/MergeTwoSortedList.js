// Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

function mergeTwoSortedList(l1, l2) {
    let mergedList = new ListNode();
    let head = mergedList;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            mergedList.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            mergedList.next = new ListNode(l2.val);
            l2 = l2.next;
        }

        mergedList = mergedList.next;
    }

    if (l1 !== null) {
        mergedList.next = l1
    }
    if (l2 !== null) {
        mergedList.next = l2
    }

    return head.next;
}

function mergeTwoSortedListMain() {
    document.writeln("Input: l1 = [1,2,4], l2 = [1,3,4]");
    document.writeln('<br>');
    document.writeln('Output : ');

    const l1Node1 = new ListNode(1);
    const l1Node2 = new ListNode(2);
    const l1Node3 = new ListNode(4);

    l1Node1.next = l1Node2;
    l1Node2.next = l1Node3;

    const l2Node1 = new ListNode(1);
    const l2Node2 = new ListNode(3);
    const l2Node3 = new ListNode(4);

    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;

    const mergedList = mergeTwoSortedList(l1Node1, l2Node1);

    printList(mergedList);

    document.writeln('<br>');
}