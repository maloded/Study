/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    const memory = new Proxy({}, {
        get: (target, name) => name in target ? target[name] : 0
    });
    let result = -1;

    for (let i = 0; i < arr.length; i++) {
        memory[arr[i]] += 1;
    } 

    for (const candidate in memory) {
        if (Number(candidate) === memory[candidate]) {
            result = Math.max(memory[candidate], result);
        }
    }

    return result;
};

console.log(findLucky([2,2,3,4])); // 2