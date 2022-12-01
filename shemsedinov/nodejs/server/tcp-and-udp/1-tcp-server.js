'use strict';

const net = require('net');

const PORT = 2000;

const onData = data => {
    console.log('📨:', data.toString());
}


const server = net.createServer(socket => {
    console.dir(socket.address());
    socket.setNoDelay(true);
    socket.write('💚');
    socket.on('data', onData);
    socket.on('error', err => {
        console.log('Socket error:', err);
    });
}).listen(PORT);

server.on('error', err => {
    console.log('Server error:', err);
});