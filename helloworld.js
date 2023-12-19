const http=require('http');

// http.createServer((req,res)=>{
//     res.write("hello world");
//     res.end();
// }).listen(4000);

const server=http.createServer();
server.listen(8000,'127.0.0.1',()=>{
    console.log('server is listen on port 8000');
})

server.on('request',(req,res)=>{
res.end("hello how are you");
})