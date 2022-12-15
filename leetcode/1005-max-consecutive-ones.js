/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    res = 0;
    zeros = 0;
    leftPoint = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            while (zeros >= k) {
                if (nums[leftPoint] === 0) --zeros;
                ++leftPoint;
            }
            ++zeros;
        }
        res = Math.max(i - leftPoint + 1, res);
    }   

    return res;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)) // expected 6