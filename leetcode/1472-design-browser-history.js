class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.node = new Node(homepage);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const nextPage = new Node(url);

    this.node.next = nextPage;
    nextPage.prev = this.node;

    this.node = this.node.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while (steps && this.node.prev) {
        --steps;
        this.node = this.node.prev;
    }

    return this.node.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (steps && this.node.next) {
        --steps;
        this.node = this.node.next;
    }
    
    return this.node.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */