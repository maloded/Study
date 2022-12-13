/**
 * https://leetcode.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const arrS = s.split('');
    const step = 2*numRows-2;
    const countStep = Math.ceil(arrS.length / step);
    const setStep = new Set();
    const resultArr = [];

    for (let i = 0; i <= step/2; i++) {
        for(let j = 0; j <= countStep; j++) {
            let min = j*step-i;
            let max = j*step+i;
            if (min > 0 && min < arrS.length) setStep.add(min);
            if (max < arrS.length) setStep.add(max);
        }
    }

    for (let item of setStep.values()) {
        resultArr.push(arrS[item]);
    }

    return resultArr.join('');
};

console.log(convert("ABCDdafadfafaaafadfadfasf", 100));