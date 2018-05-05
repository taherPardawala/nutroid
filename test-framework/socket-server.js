var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (client) {
    client.on('userid',function(userid){        
        client.on('say',function(message){
            console.log(message)
            //client.emit('reply',{type:"text"});
        })
    })
});

server.listen(3000);