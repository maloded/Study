/**
 * @param {number[][]} wall
 * @return {number}
 */
 var leastBricks = function(wall) {
    let memory = {}
    let maxCountFreeLine = 0;

    for (let i = 0; i < wall.length; i++) {
        let index = 0;
        for (let j = 0; j < wall[i].length-1; j++) {
            index += wall[i][j]
            memory[index] = memory[index] ?  memory[index] + 1 : 1;
            maxCountFreeLine = Math.max(memory[index], maxCountFreeLine);
        }
    }

    return wall.length - maxCountFreeLine;
};

console.log(leastBricks([[100000000],[100000000],[100000000]])) // 3