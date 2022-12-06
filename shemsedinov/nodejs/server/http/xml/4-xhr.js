'use strict';

const fs = require('fs');
const http = require('http');

const index = fs.readFileSync('./4-xhr.html');

http.createServer((req, res) => {
    if (req.url === '/person') {
        res.end(JSON.stringify({ name: 'Dima' }));
    } else {
        res.end(index);
    }
}).listen(8000);

