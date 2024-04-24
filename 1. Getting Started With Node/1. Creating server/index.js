const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Response received at post 8080");
});

server.listen(8080, ()=>{
    console.log("Listening at port 8080");
});

module.exports = server;
