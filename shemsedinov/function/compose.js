const f1 = x => x ** 2;
const f2 = x => ++x;
const f3 = x => x/2;

const arr = [1, 2, 3, 4, 5];

const compose = (...funcs) => x => funcs.reduce((val, func) => func(val), x);

const composesFuncs = compose(f1, f2, f3);

const newArr = arr.map(composesFuncs);

console.log(newArr);