//const io=require('socket.io')(8000);
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
//const io = socketio(server); 

//const cors = require('cors')

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
const users={};

io.on('connection',socket=>{
    socket.on('new-user-joined',name=>{
        console.log("New User",name);
        
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    })

    socket.on('send',message=>{
        socket.broadcast.emit('recieve',{message:message,name:users[socket.id]})
    })

    socket.on('disconnect',message=>{
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];    
    })
})


const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));