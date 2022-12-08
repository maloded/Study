'use strict';

const fs = require('fs');
const http = require('http');
const Websocket = require('../../../../../node_modules/ws');


const index = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(index);
});

server.listen(8000, () => {
    console.log('Listen port 8000');
});

const ws = new Websocket.Server({ server });

const clients = [];

ws.on('connection', (connection, req) => {
    clients.push(connection);
    console.log(`Connected ${req.socket.remoteAddress}`);
    connection.on('message', message => {
        const dataName = message.type + 'Data';
        const data = message[dataName];
        console.dir(message);
        console.log(`Received: ${data}`);
        clients.forEach(client => {
            if (connection !== client) {
                client.send(data);
            }
        });
    });
    connection.on('close', (resoneCode, description) => {
        console.log(`Disconnected ${connection.remoteAddress}`);
        console.dir({ resoneCode, description });
    });
});



