/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slowPointer = head;
    let fastPointer = head;
    
    while(fastPointer != null && fastPointer.next != null){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if(fastPointer == slowPointer){
            slowPointer = head;
            while(slowPointer !== fastPointer){
                slowPointer = slowPointer.next;
                fastPointer = fastPointer.next;
            }
            return slowPointer;
        }
    }
    
    return null;
};