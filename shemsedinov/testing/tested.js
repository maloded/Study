const assert = require('assert');

// Convert IP string to number
//  ip <string> - IP address
// Return: <number>

//1-th variant
// const ipToInt = ip => ip.split('.')
//     .reduce((res, item) => (res << 8) + +item, 0);

//2-th improve variant
const ipToInt = ip => {
    if (typeof(ip) !== 'string') throw Error('String expected');
    if (ip === '') throw Error('Empty is not allowed');
    const parts = ip.split('.');
    if (parts.length !== 4) throw   Error('wrong IPv4 format');
    const nums = parts.map(n => parseInt(n, 10));
    if (nums.includes(NaN)) throw Error('wrong IPv4 format');
    return nums.reduce((res, item) => (res << 8) + item);
}

// Tests

const testLocalhost = () => {
    const n = ipToInt('127.0.0.1');
    // ['127', '0', '0', '1']
    // 0 << 8 = 0 + 127 return 127
    // 127 << 8 = 32512 + 0 return 32512
    // 32512 << 8 = 8323072 + 0 return 8323072
    // 8323072 << 8 = 2130706432 + 1 return 2130706433

    // 2130706433 = 0111111 00000000 00000000 00000001

    assert.strictEqual(n, 2130706433, 'Localhost IP address')
}

const testPrivateNetwork = () => {
    const n = ipToInt('10.0.0.1');
    assert.strictEqual(n, 167772161, 'Single class A network');
}

const testNegative = () => {
    const n = ipToInt('192.168.1.10');
    assert.strictEqual(n, -1062731510, 'Negative number');
}

const testFourZeros = () => {
    const n = ipToInt('0.0.0.0');
    assert.strictEqual(n, 0, 'Four zeros');
}

const testwronString = () => {
    const n = ipToInt('wrong-string');
    assert.strictEqual(n, Number.NaN, 'wrong string');
}

const testEmptyString = () => {
    const n = ipToInt('');
    assert.strictEqual(n, 0, 'Empty string');
}

const testFourEights = () => {
    const n = ipToInt('8.8.8.8');
    assert.strictEqual(n, 0x08080809, 'Four eights');
}

const tests = [
    testLocalhost,
    testPrivateNetwork,
    testNegative,
    testFourZeros,
    testwronString,
    testEmptyString,
    testFourEights,
];

for (const test of tests) {
    try {
        test();
    } catch (err) {
        console.log(err)
    }
}



