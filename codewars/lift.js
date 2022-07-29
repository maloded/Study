// https://www.codewars.com/kata/58905bfa1decb981da00009e 3kyu

const theLift = function(queues, capacity) {
    if (capacity === 0) {
        return [0]
    }
    const noOne = function (que) {
        for (let i = 0; i < que.length; i++) {
            if (que[i].length !== 0) {
                return true
            } else if (capacityArr.length !== 0) {
                return true
            }
        }
        return false
    }
    const endArr = [];
    let capacityArr = [];
    while (noOne(queues)) {
        for (let i = 0; i < queues.length; i++) {
            let actualCapacity = capacityArr.filter(int => int !== i);
            if (actualCapacity.length !== capacityArr.length && endArr[endArr.length - 1] !== i) {
                endArr.push(i);
            }
            capacityArr = actualCapacity
            let people = 0;
            while (capacityArr.length < capacity && queues[i].length > 0 && people < queues[i].length) {
                let upPeople = queues[i][people];
                if (upPeople > i) {
                    if (endArr[endArr.length - 1] !== i && queues[i].length !== 0) {
                        endArr.push(i);
                    }
                    if (endArr[endArr.length - 1] !== i) {
                        endArr.push(i);
                    }
                    if (capacityArr.length < capacity) {
                        capacityArr.push(upPeople);
                        queues[i] = queues[i].filter((int, index) => index !== people);
                    }
                }
                if (upPeople < i) {
                    people++;
                }
            }
            people = 0;
            let some = queues[i].find(it => it > i)
            if (capacityArr.length === capacity && endArr[endArr.length - 1] !== i && some !== undefined) {
                endArr.push(i);
            }
        }
        for (let i = queues.length - 1; i > -1; i--) {
            let actualCapacity = capacityArr.filter(int => int !== i);
            if (actualCapacity.length !== capacityArr.length && endArr[endArr.length - 1] !== i) {
                endArr.push(i);
            }
            capacityArr = actualCapacity
            let people = 0;
            while (capacityArr.length < capacity && queues[i].length > 0 && people < queues[i].length) {
                let upPeople = queues[i][people];
                if (upPeople < i) {
                    if (endArr[endArr.length - 1] !== i && queues[i].length !== 0) {
                        endArr.push(i);
                    }
                    if (endArr[endArr.length - 1] !== i) {
                        endArr.push(i);
                    }
                    if (capacityArr.length < capacity) {

                        capacityArr.push(upPeople);
                        queues[i] = queues[i].filter((int, index) => index !== people);
                    }
                }
                if (upPeople > i) {
                    people++;
                }
            }
            people = 0;
            let some = queues[i].find(it => it < i)
            if (capacityArr.length === capacity && endArr[endArr.length - 1] !== i && some !== undefined) {
                endArr.push(i);
            }
        }

    }
    if (endArr[0] !== 0) {
        endArr.unshift(0);
    }
    if (endArr[endArr.length - 1] !== 0) {
        endArr.push(0);
    }
    return endArr;
}

