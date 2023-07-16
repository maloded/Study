/**
 * @param {number[][]} points
 * @return {number}
 */
 var maxPoints = function(points) {
    let result = points.length > 1 ? 2 : 1;
    if (points.length <= 2) return result;

    const memoryX = {};
    const memoryY = {};
    const initMemory = (obj, coordinate ) => {
        obj[coordinate] = obj[coordinate] ? obj[coordinate] + 1 : 1; 
    }

    const threePointsOnLine = (x1, y1, x2, y2) => (x, y) => {
        return (x-x1)/(x2-x1)===(y-y1)/(y2-y1);
    }

    for (let i = 0; i < points.length; i++) {
        initMemory(memoryX, points[i][0]);
        initMemory(memoryY, points[i][1]);
        
        for (let j = 0; j < points.length; j++) {
            if (j > i) {
                let counter = 2;
                const isThirdPointsOnLine = threePointsOnLine(points[i][0], points[i][1], points[j][0], points[j][1]);
                for (let k = 0; k < points.length; k++) {
                    if (isThirdPointsOnLine(points[k][0], points[k][1]) && k !== i && k !== j) counter += 1;
                }
                result = Math.max(counter, result);
            }
        }
    }

    const checkResult = (memory) => {
        for (const sum in memory) {
            result = Math.max(result, memory[sum]);
        }
    }

    checkResult(memoryX);
    checkResult(memoryY);

    return result;
};

console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));
