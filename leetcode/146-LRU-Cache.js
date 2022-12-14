const Node = function(key, val) {
    this.prev = null;
    this.next = null;
    this.val = val;
    this.key = key;
};

const DoublyLinkedList = function() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.size = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

DoublyLinkedList.prototype.append = function(key, val) {
    const node = new Node(key, val);

    const p = this.tail.prev;
    p.next = node;
    this.tail.prev = node;
    node.prev = p;
    node.next = this.tail;

    this.size += 1;
    return node;
};

DoublyLinkedList.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size -= 1;
    return node;
};

DoublyLinkedList.prototype.pop = function() {
    return this.remove(this.head.next);
};

/**
 * @param {number} capacity
 */
 const LRUCache = function(capacity) {
    this.size = capacity;
    this.list = new DoublyLinkedList();
    this.h = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.h.has(key)) {
        const node = this.h.get(key);
        this.list.remove(node);
        this.h.set(key, this.list.append(key, node.val));
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const oldNode = this.h.get(key);
    if (this.h.has(key)) this.list.remove(oldNode);

    const node = this.list.append(key, value);
    this.h.set(key, node);

    if (this.list.size > this.size) {
        const noNeedNode = this.list.pop();
        this.h.delete(noNeedNode.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */