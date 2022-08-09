// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5 4kuy

function parseInt(string) {
    const cardinalNumerals = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty:  40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
        hundred: 100,
        thousand: 1000,
        million: 1000000
    };
    for (const str in cardinalNumerals) {
        if (str === string) {
            return cardinalNumerals[str];
        }
    }

    const convert = (acm, strNum) => {
        if (acm > cardinalNumerals.thousand && strNum === 'hundred') {
            let ost = acm % 10;
            acm = (acm - ost) + ost * cardinalNumerals.hundred;
            return acm;
        } else if (acm < cardinalNumerals.thousand && strNum === 'hundred') {
            return acm * cardinalNumerals.hundred;
        }
        if (strNum === 'thousand') {
            return acm * cardinalNumerals.thousand;
        }
        if (strNum === 'million') {
            return acm * cardinalNumerals.million;
        }
        if (strNum === 'and') {
            return acm;
        }
        return acm + cardinalNumerals[strNum];
    }

    const arr = string.split(' ').join('-').split('-');

    return arr.reduce(convert, 0);
}


// console.log(parseInt('one'), 1);
// console.log(parseInt('twenty'), 20);
// console.log(parseInt('zero'), 0);
// console.log(parseInt('million'), 1000000);
// console.log(parseInt('two hundred forty-six'), 246);
console.log(parseInt('seven hundred eighty-three thousand nine'), 783919);
