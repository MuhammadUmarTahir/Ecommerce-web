const http = require('http');
const fs = require("fs");
const fileContent = fs.readFileSync("./index.html")
const product = fs.readFileSync("./product.html")
const account = fs.readFileSync("./account.html")

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200;
    // res.end('Hello World');
    res.end(account)
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});