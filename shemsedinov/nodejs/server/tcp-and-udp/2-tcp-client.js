'use strict';

const net = require('net');

const PORT = 2000;
const HOST = '127.0.0.1';

const onData = data => {
    console.log('📨:', data.toString());
}

const socket = new net.Socket();

socket.on('data', onData);

socket.connect({
    port: PORT,
    host: HOST,
}, () => {
    socket.write('🫦');
})

socket.unref();