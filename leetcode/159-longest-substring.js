const lengthOfLongestSubstringTwoDistinct = function(s) {
    const memory = new Proxy({}, {
        get: (target, name) => name in target ? target[name] : 0
    });
    let left = 0;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        memory[s[i]] += 1;

        while (Object.keys(memory).length > 2) {
            let leftChar = s[left];
            memory[leftChar] -= 1;

            if (memory[leftChar] === 0) delete memory[leftChar];

            left += 1;
        }

        res = Math.max(i - left + 1, res);
    }

    return res;
}

console.log(lengthOfLongestSubstringTwoDistinct('eceba')); // 3
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb')); // 5