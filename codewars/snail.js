// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1 4kyu

const snail = function(array) {
    if (array.length === 1 && array[0].length === 0) {
        return []
    }

    const endArr = [];

    let count = array.length - 1;

    let right = array.length - 1;

    let iter = 0;

    while (count > 0) {
        for (let i = iter; i < right; i++) {
            endArr.push(array[iter].shift());
        }
        for (let i = iter; i < right; i++) {
            endArr.push(array[i].pop())      ;  }
        for (let i = 0; i < count; i++) {
            endArr.push(array[right].pop());
        }
        for (let i = right; i > iter; i--) {
            endArr.push(array[i].shift());
        }
        count -= 2;
        right--;
        iter++;
    }

    if (count === 0) {
        const last = Math.floor(array.length / 2);
        endArr.push(array[last][0]);
    }

    return endArr;
}


console.log(snail([[]]), []);
console.log(snail([[1]]), [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);


