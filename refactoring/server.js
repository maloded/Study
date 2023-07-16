const http = require('http');
const PORT = 8000;

module.exports = function(data) {
    const requestListener = function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8'});
        res.end((data));
    };
    
    const server = http.createServer(requestListener).listen(PORT);
}




