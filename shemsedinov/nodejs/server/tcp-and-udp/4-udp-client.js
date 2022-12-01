'use strict';

const dgram = require('dgram');
const PORT = 3000;

const message = Buffer.from('Hello');
const client = dgram.createSocket('udp4');

client.send(message, PORT, 'localhost', err => {
    if (err) {
        client.close();
        throw err;
    };
});

