/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let left = head;
    let right = head;

    let i = 1;

    while (i <= n && right) {
        right = right.next;
        i += 1;
    }

    if (!right) return head.next;

    while (right && right.next) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;

    return head;
};