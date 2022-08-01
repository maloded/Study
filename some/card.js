const card = function (str) {
    const filterArray = str.split('').filter(e => e !== ' ' && e !== '.' && e !== '-').map(e => +e);

    let counter1 = 0;
    let counter2 = 0;

    for (let i = filterArray.length-1; i > -1; i--) {
        if ((i % 2 === 0 && filterArray.length % 2 === 0) || (i % 2 !== 0 && filterArray.length % 2 !== 0)) {
            let razriad = filterArray[i] * 2
            if (razriad > 9) {
                razriad = 1 + razriad % 10;
            }
            counter1 += razriad;
        } else {
            counter2 += filterArray[i];
        }
    }

    return (counter1+counter2)%10 === 0 ? 'Card is good' : `Card is'n good`;
}

console.log(card('4003-6000-0000-0014'));
console.log(card('0430-0600-000-0014'));
console.log(card('40 03 60 00 00 00 00 14'));
console.log(card('4003.6000.0009.0014'));