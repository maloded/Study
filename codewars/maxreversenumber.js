// https://www.codewars.com/kata/600c18ec9f033b0008d55eec 4kyu

function findReverseNumber(n) {
    const endArr = [];

    const startArr = String(n).split('');

    if (n > 0 && n < 10) {
        return BigInt(n - 1);
    }
    if (n > 9 && n < 20) {
        endArr.push(startArr[startArr.length - 1]);
        endArr.push(startArr[startArr.length - 1]);
        return BigInt(endArr.join(''));
    }

    if (startArr[0] === '1' && startArr[1] !== '0') {
        endArr.push(startArr[startArr.length - 1]);
        endArr.push(startArr[startArr.length - 1]);
        for (let i = startArr.length - 2; i !== 0; i--) {
            endArr.push(startArr[i]);
            endArr.unshift(startArr[i]);
        }
    } else if (startArr[0] === '1' && startArr[1] === '0') {
        endArr.push(startArr[startArr.length - 1]);
        for (let i = startArr.length - 2; i !== 1; i--) {
            endArr.push(startArr[i]);
            endArr.unshift(startArr[i]);
        }
        endArr.push('9');
        endArr.unshift('9');
    } else {
        endArr.push(startArr[startArr.length - 1]);
        for (let i = startArr.length - 2; i !== 0; i--) {
            endArr.push(startArr[i]);
            endArr.unshift(startArr[i]);
        }
        const firstStr = String(Number(startArr[0] - 1));
        endArr.push(firstStr);
        endArr.unshift(firstStr);
    }

    return BigInt(endArr.join(''));
}



// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 - n=10, result=9n
// 11, 22, 33, 44, 55, 66, 77, 88, 99, 101 - n=20, result=101n
// 111, 121, 131, 141, 151, 161, 171, 181, 191, 202 - n=30, result=202n
// 212, 222, 232, 242, 252, 262, 272, 282, 292, 303 - n=40, result=303n
// 313, 323, 333, 343, 353, 363, 373, 383, 393, 404 - n=50, result=404n
// 414, 424, 434, 444, 454, 464, 474, 484, 494, 505 - n=60, result=505n
// 515, 525, 535, 545, 555, 565, 575, 585, 595, 606 - n=70, result=606n
//  707 - n=80, result=707n
//  808 - n=90, result=808n
// 818, 828, 838, 848, 858, 868, 878, 888, 898, 909 - n=100, result=909n
// 919, 929, 939, 949, 959, 969, 979, 989, 999, 1001 - n=110, result=1001n
// 1111, 1221, 1331, 1441, 1551, 1661, 1771, 1881, 1991, 2002 - n=120, result=2002n
// 2112, 2222, 2332, 2442, 2552, 2662, 2772, 2882, 2992, 3003 - n=130, result=3003n
// 3113, 3223, 3333, 3443, 3553, 3663, 3773, 3883, 3993, 4004 - n=140, result=4004n
// 4114, 4224, 4334, 4444, 4554, 4664, 4774, 4884, 4994, 5005 - n=150, result=5005n

// 8118, 8228, 8338, 8448, 8558, 8668, 8778, 8888, 8998, 9009 - n=190,
// 9119, 9229, 9339, 9449, 9559, 9669, 9779, 9889, 9999, 10001 - n=200,
// 10101, 10201, 10301, 10401, 10501, 10601, 10701, 10801, 10901, 11011 - n=210,
// 11111, 11211, 11311, 11411, 11511, 11611, 11711, 11811, 11911, 12021 - n=220,
// 12121, 12221, 12321, 12421, 12521, 12621, 12721, 12821, 12921, 13031 - n=230,
// 17171, 17271, 17371, 17471, 17571, 17671, 17771, 17871, 17971, 19091 - n=290,
// 18181, 18281, 18381, 18481, 18581, 18681, 18781, 18881, 18981, 20002 - n=300,
// 19191, 19291, 19391, 19491, 19591, 19691, 19791, 19891, 19991, 20002 - n=310,
// 20102, 20202, 20302, 20402, 20502, 20602, 20702, 20802, 20902, 21012 - n=320,


//  - n=100, result=909n
//  - n=1015, result=91519n
//  - n=10011, result=9011109n
//  - n=100021, result=900212009n
//  - n=1000000, result=90000000009n
//  - n=10000000, result=9000000000009n
//  - n=100000000, result=900000000000009n
//  - n=1000000000, result=90000000000000009n
//  - n=10000000000, result=9000000000000000009n
//  - n=100000000000, result=900000000000000000009n


// 811111111111111111118, 822222222222222222228, 833333333333333333338, 844444444444444444448, 855555555555555555558, 866666666666666666668, 877777777777777777778, 888888888888888888888, 899999999999999999998, 900000000000000000009 - n=100000000000, result=900000000000000000009n


console.log(findReverseNumber(13))