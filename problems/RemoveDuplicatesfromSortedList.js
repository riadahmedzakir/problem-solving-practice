// Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

function removeDuplicatesfromSortedList(head) {
    if (!head) { return head }
    let current = head;

    while (current != null && current.next != null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};


function removeDuplicatesfromSortedListMain() {
    document.writeln(`Input: [1,1,2,3,3]`);
    document.writeln('<br>');
    document.writeln('Output : ');

    const l1Node1 = new ListNode(1);
    const l1Node2 = new ListNode(1);
    const l1Node3 = new ListNode(2);
    // const l1Node4 = new ListNode(3);
    // const l1Node5 = new ListNode(3);

    l1Node1.next = l1Node2;
    l1Node2.next = l1Node3;
    // l1Node3.next = l1Node4;
    // l1Node4.next = l1Node5;

    const result = removeDuplicatesfromSortedList(l1Node1);

    printList(result);

    document.writeln('<br>');
}