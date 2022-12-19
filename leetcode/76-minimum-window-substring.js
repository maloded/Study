/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    const memory = new Proxy({}, {
        get: (target, name) => name in target ? target[name] : 0
    });
    let left = 0;
    let res = [0, Number.MAX_SAFE_INTEGER];
    let curSize = 0;

    for (let char of t) {
        memory[char] += 1;
    }

    for (let right = 0; right < s.length; right++) {
        let curChar = s[right];
        if (curChar in memory) {
            memory[curChar] -= 1;

            if (memory[curChar] === 0) {
                curSize += 1;
            }
        }

        while (Object.keys(memory).length === curSize) {
            let curLen = right - left;
            let prevLen = res[1] - res[0];

            if (curLen < prevLen) {
                res[0] = left;
                res[1] = right;
            }
    
            let leftChar = s[left];
            if (leftChar in memory) {
                if(memory[leftChar] === 0) curSize -= 1;
                
                memory[leftChar] += 1;
            }
            left += 1;
        }
    }

    if (res[1] === Number.MAX_SAFE_INTEGER) return '';

    return s.slice(res[0], res[1] + 1); 
};