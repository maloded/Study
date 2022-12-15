const Node = function(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = new Node(0);
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;

    let prev = this.head;
    for (let i = 0; i < index + 1; i++) {
        prev = prev.next;
    }

    return prev.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) return;

    let prev = this.head;
    for (let i = 0; i < index; i++) {
        prev = prev.next;
    }
    const node = new Node(val);
    node.next = prev.next; 
    prev.next = node;

    this.size += 1;
}

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;

    let prev = this.head;
    for (let i = 0; i < index; i++) {
        prev = prev.next;
    }

    prev.next = prev.next.next;

    this.size -= 1;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */