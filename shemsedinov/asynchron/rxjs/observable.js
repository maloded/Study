const { Obsevable } = require('rxjs');

randomChar = () => String
    .fromCharCode(Math.floor((Math.random() * 26) + 97));

const observable = new Obsevable(subscriber => {
    setInterval(() => {
        const char = randomChar();
        subscriber.next(char);
    }, 100);
});

// Usage

let count = 0;

const observer = char => {
    process.stdout.write(char);
    count++;
    if (count > 50) {
        process.stdout.write('\n');
        process.exit(0);
    };
};

observable.subscribe(observer);

console.dir({ observer, observable });