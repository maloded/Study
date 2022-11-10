// Functor + chaining + composition

// Use list and chaining syntax to build sequence

const chain = (prev = null) => {
    console.log('Create element');
    const cur = () => {
        console.log('Reverse from ' + (cur.fn ? cur.fn.name : 'null'));
        if (cur.prev) {
            cur.prev.next = cur;
            cur.prev();
        } else {
            cur.forward();
        }
    };
    cur.prev = prev;
    cur.fn = null;
    cur.args = null;
    cur.do = (fn, ...args) => {
        cur.fn = fn;
        cur.args = args;
        return chain(cur);
    };
    cur.forward = () => {
        console.log('Forward');
        if (cur.fn) cur.fn(...cur.args, (err, data) => {
            console.log('Callback from ' + cur.fn.name);
            console.dir({ data });
            if (!err && cur.next) cur.next.forward();
            else console.log('End at ' + cur.fn.name);
        });
    };
    return cur;
}

// Run and see random order 
// Use global counter to detect finish 

let counter = 0;

const callbackCheck = (count, callback) => () => {
    if (++counter === count) callback();
}
 
// Emulate asynchronous calls

const wrapAsync = fn => (...args) => {
    setTimeout(
        () => fn(...args), Math.floor(Math.random() * 5000)
    )
}

// Asynchronous functions 

const readConfig = wrapAsync((name, callback) => {
    console.log('(1) config loaded');
    callback(null, { name });
});

const doQuery = wrapAsync((statement, callback) => {
    console.log('(2) SQL query: ' + statement);
    callback(null, [{ name: 'Kiev' }, {name: 'Roma'}]);
});

const httpGet = wrapAsync((url, callback) => {
    console.log('(3) Page retrieved: ' + url);
    callback(null, '<html>Some archaic web here</html>');
});

const readFile = wrapAsync((path, callback) => {
    console.log('(4) Readme file loaded');
    callback(null, 'File content');
});

console.log('start');

const callback = callbackCheck(4, () => {
    console.log('All done!');
});


const startChain = chain()
.do(readConfig, 'myConfig')
.do(doQuery, 'select * from cities')
.do(httpGet, 'http://dnu.ua')
.do(readFile, 'README.md');

startChain();

console.log('end');

