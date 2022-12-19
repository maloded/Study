/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    let nextLvl = [root];
    let prevLvl = [];

    while (nextLvl.length > 0) {
        prevLvl = nextLvl;
        nextLvl = [];

        for (const node of prevLvl) {
            if (node.left) nextLvl.push(node.left);
            if (node.right) nextLvl.push(node.right);
        }
    }

    return prevLvl.reduce((acm, next) => acm + next.val, 0);
};