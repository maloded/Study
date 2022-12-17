class DefaultDict {
    constructor(defaultInit) {
        return new Proxy({}, {
            get: (target, name) => name in target ?
                target[name] :
                (target[name] = typeof defaultInit === 'function' ?
                    new defaultInit().valueOf() :
                    defaultInit)
        });
    }
}

class Node {
    constructor(key, val) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.val = val;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.size = 0;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    append(key, val) {
        const node = new Node(key, val);

        let p = this.tail.prev;
        p.next = node;
        this.tail.prev = node;
        node.prev = p;
        node.next = this.tail;

        this.size += 1;
        return node;
    }

    pop() {
        return this.remove(this.head.next);
    }

    remove(node) {
        if (this.size > 0) {
            node.prev.next = node.next;
            node.next.prev = node.prev;

            this.size -= 1;
            return node;
        }
    }
}

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.lists = new DefaultDict(DoublyLinkedList);
    this.nodes = new DefaultDict(Node);
    this.freq = new DefaultDict(Number);
    this.minfreq = 1;
};

/** 
 * @param {number} key 
 * @return {void}
 */
LFUCache.prototype.__updateFrequency = function(key) {
    const prevNode = this.nodes[key];
    const prevFreq = this.freq[key];

    const prevFreqList = this.lists[prevFreq];
    prevFreqList.remove(prevNode);

    const nextFreqList = this.lists[prevFreq + 1];
    const node = nextFreqList.append(prevNode.key, prevNode.val);

    this.nodes[key] = node;
    this.freq[key] = prevFreq + 1;

    if (prevFreqList.size === 0) {
        delete this.lists[prevFreq];
        if (prevFreq === this.minfreq) {
            this.minfreq += 1;
        }
    }
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (key in this.nodes === false) return -1;

    const node = this.nodes[key];

    this.__updateFrequency(key);

    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) return;

    if (key in this.nodes) {
        this.nodes[key].val = value;    
        this.__updateFrequency(key);
        return;
    }

    if (this.size === this.capacity) {
        const deletingNode = this.lists[this.minfreq].pop();
        delete this.nodes[deletingNode.key];
        delete this.freq[deletingNode.key];

        if (this.lists[this.minfreq].size === 0) {
            delete this.lists[this.minfreq];
        }

        this.size -= 1;
    }

    const node = this.lists[1].append(key, value);
    this.nodes[key] = node;
    this.freq[key] = 1;

    this.size += 1;
    this.minfreq = 1;
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 const lfu = new LFUCache(2);

 lfu.put(1, 1);   
lfu.put(2, 2);
lfu.get(1);
lfu.put(3, 3);
lfu.get(3);
lfu.put(4, 4);


console.log(lfu.lists)
console.log(lfu.nodes)
console.log(lfu.freq)
console.log(lfu.minfreq)
