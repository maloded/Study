/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (const [start, end] of intervals) {
        let recent = result.at(-1);

        if (recent[1] >= start) {
            recent[1] = Math.max(recent[1], end);
        } else {
            result.push([start, end]);
        }
    }

    return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));