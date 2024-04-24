const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
console.log(req.url);

// res.write("Welcome")
// if(req.url== "/products") res.end("products");
// else if(req.url== "/users") res.end("Users");
// else if(req.url== "/any") res.end("any");
// res.end("hello");

const data = fs.readFileSync("index.html");
res.end(data);

});

server.listen(3000, ()=>{
    console.log("server is listening at port 3000");
});

