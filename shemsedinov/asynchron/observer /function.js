const randomChar = () => String 
    .fromCharCode(Math.floor((Math.random() * 26) + 97));

const subscribe = observer => {
    const observable = { observer };
    setInterval(() => {
        const char = randomChar();
        observer(char);
    }, 100);
    return observable;
};

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

const observable = subscribe(observer);

console.dir({ observer, observable });