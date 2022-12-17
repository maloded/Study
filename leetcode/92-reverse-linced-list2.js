/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let prev = null;
    let cur = head;

    for (let i = 0; i < left - 1; i++) {
        prev = cur;
        cur = cur.next;
    }

    const connectodNode = prev;
    const newTail = cur;

    for (let i = left - 1; i < right; i++) {
        let next = cur.next;

        cur.next = prev;
        
        prev = cur;
        cur = next;
    }

    newTail.next = cur;

    if (connectodNode) {
        connectodNode.next = prev;
    } else {
        head = prev;
    }

    return head;
};
