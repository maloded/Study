/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    const memory = new Proxy({}, {
        get: (target, name) => name in target ? target[name] : 0
    });
    let counter = 0;
    let left = 0;
    let res = 0;

    for (let value of s) {
        counter += 1;
        memory[value] += 1;

        if (counter - left === 4) {
            let leftChar = s[left];

            memory[leftChar] -= 1;

            if (memory[leftChar] === 0) {
                delete memory[leftChar];
            }
            left += 1;
        }

        if (Object.keys(memory).length === 3) res += 1;
    }

    return res;
};

console.log(countGoodSubstrings('aababcabc')) // 4