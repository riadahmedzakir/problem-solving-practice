/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head) { return head; }
    
    let start = head;
    let end = head.next;
    let counter = end;
    
    while(end != null && end.next != null){
        start.next = end.next;
        start = start.next;
        end.next = start.next;
        end = end.next;
    }
    
    start.next = counter;
    
    return head;
};