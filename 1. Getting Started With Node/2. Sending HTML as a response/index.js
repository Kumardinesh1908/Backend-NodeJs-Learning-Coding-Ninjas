const http = require("http");
const fs= require("fs")

const server = http.createServer((req, res) => {
    const data = fs.readFileSync("index.html");
    res.end(data);
});

server.listen(8080, ()=>{
    console.log("server is listening at port 8080");
});

module.exports = server;
