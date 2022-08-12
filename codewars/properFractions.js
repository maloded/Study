function properFractions(n){
    let counter = 0;
    const arr = [];

    const b = n/3+1;
    for (let i = 2; i < b; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    const length = arr.length;
    const m = n+n;
    for (let i = n+1; i < m; i++) {
        let count = 0;
        for (let j = 0; j < length; j++) {

            if (i%arr[j] !== 0) {
                count++;
            } else {
                break;
            }
        }
        if (count === length) {
            counter++;
        }
    }
    return counter;
}


// console.log(properFractions(1),0);
// console.log(properFractions(2),1);
// console.log(properFractions(5),4);
// console.log(properFractions(15),8);
console.log(properFractions(25),20);
// console.log(properFractions(253872), 80640);