
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

//Synchron calls

// readConfig('myConfig', callback);
// doQuery('select * from cities', callback);
// httpGet('http://dnu.ua', callback);
// readFile('README.md', callback);

// Asynchron calls

readConfig('myConfig', () => {
    doQuery('select * from cities', () => {
        httpGet('http://dnu.ua', () => {
            readFile('README.md', () => {
                console.log('All done!')
            });
        });
    });
});



console.log('end');