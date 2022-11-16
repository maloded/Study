const { clear } = require("console");

const compose = (f1, f2) => (...arg) => f1(...arg).then(res => f2(res));

const inc = async x => x + 1;
const twice = async x => x * 2;

const f = compose(inc, twice);

(async () => {
    const res = await f(7);
    console.dir({ res });
})();


