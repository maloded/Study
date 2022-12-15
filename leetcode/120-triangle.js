/**
 * https://leetcode.com/problems/triangle/
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;
    const memo = [new Array(n).fill(Number.MAX_SAFE_INTEGER), new Array(n).fill(Number.MAX_SAFE_INTEGER)]
    memo[0][0] = triangle[0][0];

    for (let i = 1; i < n; i++) {
        for (j = 0; j < triangle[i].length; j++) {
            memo[i%2][j] = Math.min(memo[(i-1) % 2][j], memo[(i-1) % 2][Math.max(j-1, 0)]) + triangle[i][j];
        }
    }

    return Math.min.apply(null, memo[(n-1) % 2]);
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); // expected 11
