// https://www.codewars.com/kata/62d1eb93e5994c003156b2ae 6kyu

function encode(str) {
    const azbuka = [
        [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']],
        [['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R']],
        [['S', 'T', 'U'], ['V', 'W', 'X'], ['Y', 'Z', ' ']]
    ]

    const arr = str.split('');

    const newArr = [];

    const fn = (m) => {
        if (m === 0) {
            return '.';
        } else if (m === 1) {
            return '..'
        } else {
            return '...'
        }
    }

    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < azbuka.length; i++) {
            for (let j = 0; j < azbuka.length; j++) {
                for (let k = 0; k < azbuka.length; k++) {
                    if (azbuka[i][j][k] === arr[n]) {
                        newArr.push(fn(k) + ' ' + fn(j) + ' ' + fn(i))
                    }
                }
            }
        }
    }


    return newArr.join(' ');
}

console.log(encode("ALEXEY MALODED"))

function decode(str) {
    const azbuka = [
        [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']],
        [['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R']],
        [['S', 'T', 'U'], ['V', 'W', 'X'], ['Y', 'Z', ' ']]
    ]
    "MALODED"
    const oldArr = str.split(' ')


    const newArr = [];

    const fn = (m) => {
        if (m === '.') {
            return 0;
        } else if (m === '..') {
            return 1
        } else {
            return 2
        }
    }

    for (let i = 0; oldArr.length !== 0; i++) {
        const arr = []
        for (let j = 0; j < 3; j++) {
            arr.push(fn(oldArr.shift()))
        }
        newArr.push(arr)
    }

    const lastArr = []

    for (let i = 0; i < newArr.length; i++) {
        lastArr.push(azbuka[newArr[i][2]][newArr[i][1]][newArr[i][0]])
    }


    return lastArr.join('')

}

console.log(decode(". . . ... . .. .. .. . ... .. ... .. .. . . ... ... ... ... ... . .. .. . . . ... . .. ... .. .. . .. . .. .. . . .. ."))
