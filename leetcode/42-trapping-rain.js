/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let maxLeft = height[0];
    let maxRight = height.at(-1);

    let left = 1;
    let right = height.length - 2;
    let result = 0;

    while (left <= right) {
        if (maxLeft <= maxRight) {
            maxLeft = Math.max(maxLeft, height[left]);
            result += maxLeft - height[left];
            ++left;
        } else {
            maxRight = Math.max(maxRight, height[right]);
            result += maxRight - height[right];
            --right;
        }
    }

    return result;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9