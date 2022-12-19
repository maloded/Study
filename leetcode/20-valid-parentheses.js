/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    const memory = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let char of s) {
        if (char in memory) {
            let lastItem = stack.pop();
            if (lastItem !== memory[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};