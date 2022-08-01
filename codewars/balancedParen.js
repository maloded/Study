
// TODO no completed

function balancedParens(n) {
    const endArr = [];

    if (n === 0) {
        return [""];
    }

    let counter = n;

    const startArr = [];

    for (let i = 0; i < n; i++) {
        startArr.push('(')
    }
    let iterArr = startArr;

    const second = {
        '(': ')'
    }


   for (let i = n; i > 0; i--) {
        while (iterArr.length > 0) {
            let wArr = [];

            for (let j = 0; j < i; j++) {
                wArr.push(iterArr.pop());
            }


        }
        iterArr = startArr;
    }


    return endArr;
}

console.log(balancedParens(0)); // [""]
console.log(balancedParens(1)); // ["()"]
console.log(balancedParens(2)); // ["()()","(())"]
console.log(balancedParens(3)); // ["()()()","(())()","()(())","(()())","((()))"]