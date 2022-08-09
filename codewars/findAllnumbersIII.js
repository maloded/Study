function findAll(n, k) {
    //check
    if (n < k || n/k > 9) {
        return [];
    }
    const iter = (num, kkk) => {
        const arr = [];
        for (let i = 0; i < kkk; i++) {
            arr.push(num);
        }
        return arr.join('')
    }
    if (n === k) {
        const mirror = iter(1, k)
        return [1, mirror, mirror];
    }
    if (n/k === 9) {
        const mirror = iter(9, k)
        return [1, mirror, mirror];
    }

    // State
    const endArr = [];


    // Search max variant
    if (n % k === 0) {
        endArr.unshift(iter(n/k, k));
    } else {
        const maxArr = [];
        const max = Math.floor(n/k);
        let counter = n - max * k;
        for (let i = 0; i < k - 1; i++) {
            if (counter > 0) {
                maxArr.unshift(max + 1);
            } else {
                maxArr.unshift(max);
            }
            counter--;
        }
        maxArr.unshift(max);
        endArr.unshift(maxArr.join(''));
    }

    // Search min variant
    const minArr = [];
    let counter = k-1;
    let newN = n;
    let num = 9;
    let flag = false;
    for (let i = 0; i < k; i++) {
        if (newN >= num + counter) {
            minArr.unshift(num);
            newN -= num;
        } else if (!flag) {
            const numMid = newN - counter
            minArr.unshift(numMid);
            newN -= numMid;
            flag = true;
        } else {
            minArr.unshift(1);
        }

        counter--;
    }
    endArr.unshift(minArr.join(''));

    // Search col iter
    let min = +endArr[0];
    const max = +endArr[1]
    let colVar = 0;
    let fll = true;
    while (min <= max) {
        let fl = true;
        let array = min.toString().split('').map(e => +e);
        let suma = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                console.log(min)
                fl = false;
                break;

            } else {
                suma += array[i]
            }
        }

        if (fl && suma === n) {
            colVar++;
            fll = true;
        } else if (fll) {
            min += 54;
            fll = false;
        }

        min += 9;
    }

    endArr.unshift(colVar)

    return endArr;
}


// console.log(findAll(10, 3), [8, '118', '334']);
// console.log(findAll(27, 3), [1, '999', '999']);
// console.log(findAll(84, 4), []);
console.log(findAll(35, 6), [123, '116999', '566666'])
console.log(findAll(6, 6), [1, '111111', '111111'])
