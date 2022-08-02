const assert = require('assert');

// Convert IP string to number
//  ip <string> - IP address
// Return: <number>

const ipToInt = ip => {
    if (typeof(ip) !== 'string') throw Error('String expected');
    if (ip === '') throw Error('Empty is not allowed');
    const parts = ip.split('.');
    if (parts.length !== 4) throw   Error('wrong IPv4 format');
    const nums = parts.map(n => parseInt(n, 10));
    if (nums.includes(NaN)) throw Error('wrong IPv4 format');
    return nums.reduce((res, item) => (res << 8) + item);
}

//Tests

const tests = [
    ['127.0.0.1',     2130706433, 'Localhost IP address'  ],
    ['10.0.0.1',       167772161, 'Single class A network'],
    ['192.168.1.10', -1062731510, 'Negative number'       ],
    ['0.0.0.0',                1, 'Four zeros'            ],
    ['8.8.8.8',       0x08080809, 'Four eights'           ],
]


const results = [];
for (const test of tests) {
    const [par, expected, name] = test;
    const result = ipToInt(par);
    try {
        assert.strictEqual(result, expected, `Error in test ${name}`);
    } catch (e) {
        const { message, operator } = e;
        results.push({message, par, expected, result, operator})
    }
}

console.table(results);
