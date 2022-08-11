function properFractions(n){
    // let counter = 0;
    // for (let i = 1; i < n; i++) {
    //     for (let j = 2; j < i+1; j++) {
    //         if (n%j === 0 && i%j === 0) {
    //             counter++;
    //         }
    //     }
    // }
    // return n-counter-1;
    let counter = 0;
    const arr = [];

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    const length = arr.length;
    for (let i = n+1; i < n+n; i++) {
        // if (arr.filter(e => i%e === 0).length === 0) {
        //     counter++;
        // }
        let count = 0;
        for (let j = 0; j < arr.length; j++) {

            if (i%arr[j] !== 0) {
                count++;
            }
        }
        if (count === length) {
            counter++;
        }
    }
    return counter;
}

console.log(properFractions(1),0);
console.log(properFractions(2),1);
console.log(properFractions(5),4);
console.log(properFractions(15),8);
console.log(properFractions(25),20);