// https://www.codewars.com/kata/529bf0e9bdf7657179000008 4kyu

function validSolution(board) {
    const sqrt = Math.sqrt(board.length);
    if (Math.floor(sqrt) !== sqrt) {
        return false;
    }

    const boardCol = JSON.parse(JSON.stringify(board));
    let counter = 0;


    let arrLast = [];

    for (let i = 0; i < board.length; i++) {
        arrLast.push([]);
    }

    const fff = (count, item, iter) => {
        if (count < iter) {
            arrLast[count].push(item);
            return;
        }
        fff (count+sqrt, item, iter+sqrt);
    }

    for (let i = 0; i < board.length; i++) {
        let counter2 = 0;
        if (counter === sqrt) {

            counter = 0;
        }

        for (let j = 0; j < board.length; j++) {
            boardCol[i].unshift(boardCol[j].pop());

            if (counter2 < 3) {

            } else if (counter2 < 6) {
                arrLast[counter2].push(board[j][i]);
            } else {
                arrLast[counter2].push(board[j][i]);
            }


            counter2++
        }

        counter++;
    }

    const arr = board.concat(boardCol, arrLast);



    for (let i = 0; i < arr.length; i++) {
        let sum = new Set(arr[i]);
        let sumArr = [...sum];
        for (let j = 0; j < sumArr.length; j++) {
            if (sumArr.length < 9) {
                return false;
            }
        }
    }

    return true;
}


// console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]), true);
// console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 5, 9, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]), false);

console.log(validSolution([
    [5, 4, 6, 2, 1, 3, 8, 7, 9],
    [4, 6, 5, 1, 3, 2, 7, 9, 8],
    [6, 5, 4, 3, 2, 1, 9, 8, 7],
    [2, 1, 3, 8, 7, 9, 5, 4, 6],
    [1, 3, 2, 7, 9, 8, 4, 6, 5],
    [3, 2, 1, 9, 8, 7, 6, 5, 4],
    [8, 7, 9, 5, 4, 6, 2, 1, 3],
    [7, 9, 8, 4, 6, 5, 1, 3, 2],
    [9, 8, 7, 6, 5, 4, 3, 2, 1]
]), false);

