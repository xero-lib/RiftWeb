const WebSocket = require('ws');
const http = require('http');
const url = require('url');
const port = 3500;
const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true, clientTracking: true });

wss.on('connection', (ws, request) => {
    console.log(new Date() + ' | Client connected');
    
    ws.on('message', (msgStr) => {
        console.log('Message:',msgStr);
        ws.send(msgStr);
    });

    // implement uuid tracking
    
    let sessionMsg = {};
    sessionMsg.type = 'register';
    sessionMsg.method = 'register';
    
    let userKey = request.headers['sec-websocket-key'];
    sessionMsg.sessionID = userKey;
    // sessionMsg.uuid = uuid;

    ws.send(JSON.stringify(sessionMsg));

    ws.on('close', (connection) => {
        console.log(new Date(),'| Closing a connection.');
    });
});

server.on('upgrade', function upgrade(request, socket, head) {
    console.log(new Date(),'| Upgrading http connection to wss: url =',request.url);

    var prasedUrl = url.parse(request.url, true, true);
    const pathmame = prasedUrl.pathname;

    console.log(new Date(),'| Pathname =',pathmame);

    if(pathmame === '/') {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }

});

server.listen(port, function() {
    console.log(new Date() + ' | Server is listening on port ' + port);
});