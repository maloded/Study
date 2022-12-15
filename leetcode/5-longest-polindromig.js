/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let res = '';

    const getPal = (str, left, right) => {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            --left;
            ++right;
        }
        return str.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        const variant1 = getPal(s, i, i);
        const variant2 = getPal(s, i, i+1);
        if (variant1.length > res.length) res = variant1;
        if (variant2.length > res.length) res = variant2
    }
    
    return res;
};

console.log(longestPalindrome('rreabab'))