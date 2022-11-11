const INTERVAL = 10;

const range = {
    start: 0,
    end: 1000,
    [Symbol.asyncIterator]() {
        let time = Date.now();
        let value = this.start;
        return {
            next: () => {
                const now = Date.now();
                const diff = now - time;
                if (diff > INTERVAL) {
                    time = now;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve({
                                value,
                                done: value++ === this.end
                            });
                        }, 0);
                    })
                } else {
                    return Promise.resolve({
                        value,
                        done: value++ === this.end
                    });
                };
            }
        };
    }
};

console.dir({
    range,
    names: Object.getOwnPropertyNames(range),
    symbols: Object.getOwnPropertySymbols(range),
});

let k = 0;

const timer = setInterval(() => {
    console.log('next', k++);
}, 10);

(async () => {
    const begin = process.hrtime.bigint();
    for await (const number of range) {
        console.log(number);
        if (number === range.end - 1) {
            clearInterval(timer);
        };
    };
    const diff = (process.hrtime.bigint() - begin) / 1000000n;
    console.log('Time(ms):', diff.toString());
    console.dir({ k });
})();