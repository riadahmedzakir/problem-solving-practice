class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


function printList(list) {
    let head = list.next;
    let arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    document.writeln(arr);
}
