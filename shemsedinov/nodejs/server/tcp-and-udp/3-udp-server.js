'use strict';

const dgram = require('dgram');
const PORT = 3000;

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.dir({ msg, rinfo });
});

server.bind(PORT);
