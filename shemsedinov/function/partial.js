const partial = (fn, ...x) => (...args) => fn(...x, ...args);
// or const partial = (fn, ..args) => (...rest) => fn(...args.concat(rest));

const sum = (a, b, c, d) => (a + b + c + d);

const f1 = partial(sum, 2);
const f2 = partial(f1, 3);
const f3 = partial(f2, 4);
const fEnd = f3(5);
console.log(fEnd);

const f5 = partial(sum, 2);
const f6 = partial(f5, 3, 4)
const fEnd2 = f6(5);
console.log(fEnd2);


